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
    Name: ""
  }
});
var ChampionshipsCollection = Backbone.Collection.extend({
    model: Championship
});
var Championships = new ChampionshipsCollection();
console.log(Championships);
var ChampionshipView = Backbone.View.extend({
  el: $('#championships'),
  initialize: function() {
    this.render();
  },
  render: function() {
    $(this.el).append("<h1>Championships</h1>");
    var htmlOut = '';
    _.each(this.collection.models, function(model, index, list) {
      console.log(model);
    });
  },
});
