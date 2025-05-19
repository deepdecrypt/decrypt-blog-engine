export default () => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY,
      },
      settings: {
        defaultFrom: 'your-email@example.com',
        defaultReplyTo: 'your-email@example.com',
        testAddress: 'your-email@example.com',
      },
    },
  },
});
