Journal.Views.PostsNewEdit = Backbone.View.extend({
  template: JST["posts/post_form"],

  events: {
    "submit form": "submit"
  },

  render: function() {
    var renderedContent = this.template({post: this.model});
    this.$el.html(renderedContent);

    return this;
  },

  submit: function(event) {
    this.$("div.errors").empty()
    var that = this

    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var currentModel = this.model

    currentModel.save(params["post"], {
      success: function () {
        Backbone.history.navigate("posts/" + params["post"]["id"],
          {trigger: true});
      },
      error: function (stuff, err) {
        var div = $("<div class='errors'>")
        div.html(err["responseText"])
        that.$el.append(div)
      }
    });
  }

})



// initialize: function(){
//   this.listenTo(this.model, "sync", this.render);
// },
//
// render: function () {
//   var content = this.template({ post: this.model });
//   this.$el.html(content);
//   return this;
// }
