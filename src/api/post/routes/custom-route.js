
module.exports = {
    routes: [
      { // Path defined with an URL parameter
        method: 'GET',
        path: '/posts/exemple', 
        handler: 'api::post.post.exempleAction',
      }
    ]
  }