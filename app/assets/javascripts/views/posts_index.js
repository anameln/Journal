Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  tagName: 'ul',

  initialize: function (){
    this.listenTo(this.collection, "reset add sync", this.render)
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    var that = this;
    this.collection.forEach( function(item){
      var indexItemView = new Journal.Views.PostsIndexItem({model: item});
      that.$el.append(indexItemView.render().$el);
    });
    return this
  }
});

Journal.Views.PostsIndexItem = Backbone.View.extend({
  template: JST["posts/index_item"],
  tagName: 'li',

  events: {
    "click delete-post": "deletePost"
  },

  initialize: function(){
    this.listenTo(this.model, "remove", this.render)
  },

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }

});
