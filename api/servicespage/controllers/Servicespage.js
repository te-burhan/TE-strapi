'use strict';

/**
 * Servicespage.js controller
 *
 * @description: A set of functions called "actions" for managing `Servicespage`.
 */

module.exports = {

  /**
   * Retrieve servicespage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.servicespage.search(ctx.query);
    } else {
      return strapi.services.servicespage.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a servicespage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.servicespage.fetch(ctx.params);
  },

  /**
   * Count servicespage records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.servicespage.count(ctx.query, populate);
  },

  /**
   * Create a/an servicespage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.servicespage.add(ctx.request.body);
  },

  /**
   * Update a/an servicespage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.servicespage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an servicespage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.servicespage.remove(ctx.params);
  }
};
