module.exports = ({
  env
}) => ({
  // Ensure the subscriber API is registered
  'content-manager': {
    enabled: true,
    resolve: './src/plugins/content-manager',
  },
  'content-type-builder': {
    enabled: true,
  },
  'users-permissions': {
    enabled: true,
    config: {
      jwt: {
        expiresIn: '7d',
      },
      register: {
        allowedFields: ['username', 'email'],
      },
      auth: {
        events: {
          onConnection: ['message'],
        },
        options: {
          expiresIn: '7d',
        },
      },
      email: {
        // Enable email confirmation
        enableEmailConfirmation: true,
        emailConfirmationRedirection: '/email-confirmed',
        emailConfirmation: {
          display: 'Email Confirmation',
          icon: 'envelope',
          subject: 'Confirm your email',
          html: (user) => `
            <h2>Welcome to Deep Decrypt!</h2>
            <p>Thank you for registering. Please confirm your email by clicking the button below:</p>
            <a href="<%= URL %>" style="display: inline-block; padding: 10px 20px; background: #4F46E5; color: white; text-decoration: none; border-radius: 4px; margin: 10px 0;">
              Confirm Email
            </a>
            <p>Or copy and paste this link in your browser:</p>
            <p><%= URL %></p>
            <p>This link will expire in 24 hours.</p>
          `,
        },
        resetPassword: {
          display: 'Reset Password',
          icon: 'key',
          subject: 'Reset your password',
          html: (user) => `
            <h2>Reset Your Password</h2>
            <p>You requested to reset your password. Click the button below to set a new password:</p>
            <a href="<%= URL %>" style="display: inline-block; padding: 10px 20px; background: #4F46E5; color: white; text-decoration: none; border-radius: 4px; margin: 10px 0;">
              Reset Password
            </a>
            <p>Or copy and paste this link in your browser:</p>
            <p><%= URL %></p>
            <p>This link will expire in 1 hour.</p>
            <p>If you didn't request this, please ignore this email.</p>
          `,
        },
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('BREVO_SMTP_HOST', 'smtp-relay.brevo.com'),
        port: env('BREVO_SMTP_PORT', 587),
        auth: {
          user: env('BREVO_SMTP_USER'),
          pass: env('BREVO_SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_FROM', 'noreply@deepdecrypt.com'),
        defaultReplyTo: env('EMAIL_REPLY_TO', 'contact@deepdecrypt.com'),
      },
    },
  },
});
