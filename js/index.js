$(function() {
  // Enable Popper.js Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
  $('.nav-tabs').scrollingTabs({
    bootstrapVersion: 4,
    cssClassLeftArrow: "bi bi-chevron-left",
    cssClassRightArrow: "bi bi-chevron-right",
    disableScrollArrowsOnFullyScrolled: true,
    scrollToTabEdge: true,
    
  });
  var Championships = new ChampionshipsCollection();
  var view = new ChampionshipView({collection: Championships});
  Championships.fetch({reset: true});
});
