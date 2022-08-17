'use strict';

/**
 * policy router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::policy.policy');


module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/policies',
        handler: 'policy.find',
        config: {
          policies: ['global::is-older-18-years-old']
        }
      }
    ]
  }
   