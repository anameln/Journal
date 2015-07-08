Journal.Routers.JournalRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow",
    "posts/:id/edit": "postsEdit",
    "posts/new": "postsNew"

  },

  postsShow: function (id) {
    var post = Journal.Collections.posts.getOrFetch(id);

    var showView = new Journal.Views.PostsShow({model: post});

    this._swapView(showView);
  },

  postsIndex: function () {
    Journal.Collections.posts.fetch();

    var indexView = new Journal.Views.PostsIndex({
      collection: Journal.Collections.posts
    });
    this._swapView(indexView);
  },

  postsEdit: function (id) {
    var post = Journal.Collections.posts.getOrFetch(id);

    var formView = new Journal.Views.PostsNewEdit({model: post})

    this._swapView(formView);
  },

  postsNew: function () {
    var newPost = new Journal.Model.Post();

    var formView = new Journal.Views.PostsNewEdit({model: newPost});

    this._swapView(formView);
  },

  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }

    $("body").html(newView.render().$el);

    this.currentView = newView;
  }
});
