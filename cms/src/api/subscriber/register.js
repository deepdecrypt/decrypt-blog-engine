module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/subscribers',
      handler: 'subscriber.create',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/subscribers/verify',
      handler: 'subscriber.verifyEmail',
      config: {
        auth: false,
      },
    },
  ],
};
