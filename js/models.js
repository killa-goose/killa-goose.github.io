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
var chmpsData = $.ajax({
    url: "resources/data/championships.json",
    success: function(data){
      console.log('AJAX success!');
      console.log(data);
      $('.container section:nth-child(3)').text(JSON.stringify(data));
      console.log('Constructing ChampionshipsCollection...')
      for (i=0; i < data.championships.length; i++) {
        let c = data.championships[i];
        console.log(c);
        let m = new Championship(c);
        Championships.add(m);
      }
    console.log(Championships);
    },
    error: function(xhr, status, error) {
      console.log(status, error);
    }
});
