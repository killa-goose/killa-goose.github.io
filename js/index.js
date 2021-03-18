var ChampView = Backbone.View.extend({
  el: $('#championships'),
  initialize: function() {
    this.render();
  },
  render: funcion() {
    $(this.el).append("<h1>Championships</h1>");
  }
});
