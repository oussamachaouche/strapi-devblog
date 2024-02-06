'use strict';

const { filter } = require('../../../../config/middlewares');
const post = require('../routes/post');

/**
 * post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
    "api::post.post",
    ({ strapi }) => ({
      /**
       * Example 1: Modifying a Strapi controller function
       *
       * If you need to modify the input or output of a pre-defined Strapi controller method,
       * write a method of the same name, and use `super` to call the parent method.
       * */
      async exempleAction(ctx) {
        // your custom logic for modifying the input
        const test = await strapi.service("api::post.post").exampleService();
   try {
    ctx.body = test;
   } catch (error) {
    ctx.body=error;
   }
  
      },
  
      /**
       * Example 2: Replacing a Strapi controller function
       *
       * If you need to completely replace the behavior of a pre-defined Strapi controller method,
       * you can do so by simply implementing a method of the same name.
       *
       * Caution: You will need to manage the security of the request and results on your own,
       * as demonstrated in this example.
       * */
      async find(ctx) {
        const nonPremiumPost = ctx.query.filters && ctx.query.filters.premium === false;
      
        if (ctx.state.user || nonPremiumPost) {
          return await super.find(ctx);
        }
      
        const publicPost = await strapi.service("api::post.post").findPublic(ctx.query);
        const sanitizedResults = await this.sanitizeOutput(publicPost, ctx);
      
        return this.transformResponse(sanitizedResults);
      },

      async findOne(ctx){
        if (ctx.state.user )  return await super.find(ctx);
        const {id} = ctx.params;
        const {query} = ctx;
        const ifpublicPost = await strapi.service("api::post.post").findOneIfPublic({id,query});
        const sanitizedResults = await this.sanitizeOutput(ifpublicPost, ctx);
      
        return this.transformResponse(sanitizedResults);
          
      },
      async likePost(ctx){
   const user= ctx.state.user;
   const postId = ctx.params.id;
   const {query} = ctx;
   const updatPost = await strapi.service("api::post.post").likePost({postId,userId: user.id,query});
   const sanitizedResults = await this.sanitizeOutput(updatPost, ctx);
      
   return this.transformResponse(sanitizedResults);

      },
  
      /**
       * Example 3: Writing your own new controller function
       * If you need to create some new action that does not match one of the pre-configured Strapi methods,
       * you can simply add the method with the desired name and implement whatever functionality you want.
       *
       * Caution: Similar to replacing a controller, you will need to manage the security of the request
       * yourself, so remember to use sanitizers and validators as needed.
       * */
      async healthCheck(ctx) {
        ctx.body = "ok";
      },
    })
  );
