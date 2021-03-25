var Stage = Backbone.Model.extend({
  defaults: {
    Belt: false,
    NRounds: 1,
    Name: "",
    Rewards: {
      Cash: 0,
      Coaches: [""],
      Gear: [""]
    }
  }
});
var Championship = Backbone.Model.extend({
  defaults: {
    NStages: 0,
    Name: "",
    id: 0
  }
});
var ChampionshipsCollection = Backbone.Collection.extend({
    model: Championship,
    url: "/resources/data/championships.json"
});
var ChampionshipView = Backbone.View.extend({
  el: $('#championships'),
  template: _.templateFromUrl("/resources/templates/html/accordian.htm", this.collection),
  initialize: function() {
    this.listenTo(this.collection, 'reset', this.render);
  },
  render: function() {
    if (this.collection.length > 0) {
      this.$el.html(this.template({
        collection: this.collection.toJSON()
      }));
    } else {
      this.$el.html("<h1>Championships</h1>");
    }
  },
});
