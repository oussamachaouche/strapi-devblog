'use strict';

/**
 * course router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::course.course',{
    prefix: '',
    only: ['find', 'findOne'],
    except: [],
    config: {
      find: {
      },
      findOne: {},
      create: {},
      update: {},
      delete: {},
    },
});
