'use strict';

const likePost = require("./api/post/routes/like-post");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {

    const extensionService = strapi.plugin('graphql').service('extension');
    const extension = ({ nexus }) => ({
    typeDefs: `
    type Mutation {
        likePost(id: ID!): PostEntityResponse
    }
`,

resolvers: {
  Mutation: {
    likePost: async (parent ,args, ctx, info) =>{
      const {id:postId} = args;
      const userId = ctx.state.user.id;
      const postLiked = await strapi.service("api::post.post").likePost({postId,userId});
// const {toEntityReponse} =  strapi.plugin("graphql").service("format").returnTypes;
// const formarEntity = toEntityReponse(likePost,{
//   args,
//   resourceUID:"api::post.post"
// });


// const { toEntityResponse } = strapi.plugins['graphql'].services.format.returnTypes;

// const formattedEntity = toEntityResponse({
//   args, 
//   resourceUID: 'api::post.post', 
//   data: likePost
// });
return postLiked;
    },
  },
},
resolversConfig: {
  'Mutation.likePost': {
    auth: {
      scope:["api::post.post.likePost"]
    },
  },
},

  });
  extensionService.use(extension);
  },


  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
