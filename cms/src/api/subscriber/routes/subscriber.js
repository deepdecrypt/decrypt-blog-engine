'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

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
    }
  ]
};
