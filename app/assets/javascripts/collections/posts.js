Journal.Collections.Posts = Backbone.Collection.extend({
  model: Journal.Models.Post,
  url: "/api/posts",

  getOrFetch: function(id) {
    var posts = this;

    var post;
    if (post = this.get(id)){
      post.fetch();
    } else {
      post = new Journal.Models.Post({ id: id});
      post.fetch({
        success: function () { posts.add(post)}
      });
    }
    return post;
  }
});

Journal.Collections.posts = new Journal.Collections.Posts();
// Journal.Collections.posts.fetch()
// reset: true
