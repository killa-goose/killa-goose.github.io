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
  initialize: function() {
    console.log('Starting ChampionshipView initialization');
    this.listenTo(this.collection, 'reset', this.render);
    //this.collection.fetch({reset:true});
    //this.render();
  },
  render: function() {
    console.log('Starting ChampionshipView render');
    if (this.collection.length > 0) {
      var htmlOut = '<h1>Championships</h1>';
      _.each(this.collection.models, function(model, index, list) {
        htmlOut += '<br>';
        htmlOut += JSON.stringify(model);
        //console.log(htmlOut);
      });
      this.$el.append(htmlOut);
    } else {
      this.$el.html("<h1>Championships</h1>");
    }
  },
});
