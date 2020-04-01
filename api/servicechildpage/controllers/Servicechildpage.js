'use strict';

/**
 * Servicechildpage.js controller
 *
 * @description: A set of functions called "actions" for managing `Servicechildpage`.
 */

module.exports = {

  /**
   * Retrieve servicechildpage records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.servicechildpage.search(ctx.query);
    } else {
      return strapi.services.servicechildpage.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a servicechildpage record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.servicechildpage.fetch(ctx.params);
  },

  /**
   * Count servicechildpage records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.servicechildpage.count(ctx.query, populate);
  },

  /**
   * Create a/an servicechildpage record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.servicechildpage.add(ctx.request.body);
  },

  /**
   * Update a/an servicechildpage record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.servicechildpage.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an servicechildpage record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.servicechildpage.remove(ctx.params);
  }
};
