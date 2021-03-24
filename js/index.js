$(function() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
  var Championships = new ChampionshipsCollection();
  var view = new ChampionshipView({collection: Championships});
  Championships.fetch({reset: true});
  /*
  var chmpsData = $.ajax({
    url: "resources/data/championships.json",
    success: function(data){
      console.log('AJAX success!');
      //$('.container section:nth-child(3)').text(JSON.stringify(data));
      console.log('Constructing ChampionshipsCollection...')
      for (i=0; i < data.championships.length; i++) {
        let c = data.championships[i];
        console.log(c);
        let m = new Championship(c);
        Championships.add(m);
      }
    },
    error: function(xhr, status, error) {
      console.log(status, error);
    }
  });*/
});
