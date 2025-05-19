'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

// Custom email validation
const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

module.exports = createCoreController('api::subscriber.subscriber', ({ strapi }) => ({
  async create(ctx) {
    // Start a transaction to ensure data consistency
    const trx = await strapi.db.connection.connection;
    
    try {
      await trx.beginTransaction();
      
      const { email, source = 'website' } = ctx.request.body.data || {};

      // Validate email exists
      if (!email || !email.trim()) {
        await trx.rollback();
        return ctx.badRequest('Email is required');
      }

      // Validate email format
      if (!isValidEmail(email)) {
        await trx.rollback();
        return ctx.badRequest('Please provide a valid email address');
      }

      const normalizedEmail = email.toLowerCase().trim();

      // Check if email already exists using a direct query to ensure no race condition
      const [existingSubscriber] = await trx('subscribers')
        .where('email', normalizedEmail)
        .forUpdate(); // Lock the row for update

      if (existingSubscriber) {
        await trx.rollback();
        return ctx.badRequest('This email is already subscribed');
      }

      try {
        // Create subscriber using direct query to ensure consistency
        const [subscriberId] = await trx('subscribers').insert({
          email: normalizedEmail,
          source: source || 'website',
          published_at: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        });

        // Get the created subscriber with all fields
        const [createdSubscriber] = await trx('subscribers')
          .where('id', subscriberId)
          .select('*');

        await trx.commit();

        // Return the created subscriber data
        return {
          data: {
            id: createdSubscriber.id,
            attributes: {
              email: createdSubscriber.email,
              source: createdSubscriber.source,
              createdAt: createdSubscriber.created_at,
              updatedAt: createdSubscriber.updated_at
            },
          },
        };
      } catch (dbError) {
        await trx.rollback();
        console.error('Database error:', dbError);
        
        // Handle unique constraint violation
        if (dbError.code === 'ER_DUP_ENTRY' || dbError.message?.includes('duplicate')) {
          return ctx.badRequest('This email is already subscribed');
        }
        
        throw dbError;
      }
    } catch (error) {
      console.error('Subscription error:', error);
      
      try {
        await trx.rollback();
      } catch (rollbackError) {
        console.error('Error rolling back transaction:', rollbackError);
      }
      
      // Return a more detailed error message in development
      const errorMessage = process.env.NODE_ENV === 'development' 
        ? `Failed to process subscription: ${error.message}`
        : 'Failed to process subscription';
      
      return ctx.internalServerError(errorMessage);
    }
  }
}));
