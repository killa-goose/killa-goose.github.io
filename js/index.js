$(function() {
  // Enable Popper.js Tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });
  // Enable Night Mode Toggle
  $('#nightModeSwitch').click( function() {
    $('body').toggleClass('bootstrap bootstrap-dark');
  });
  // Github repos
  let repos = [], projEl = $("#projects > .row")
      repoTmpl = _.templateFromUrl('/resources/templates/html/repos.htm', {});
  $.getJSON('//api.github.com/users/killa-goose/repos',{})
    .done(function(data){
      _.each(data, function(d) {
        let div = repoTmpl({data: d});
        projEl.append(div);
      });
  });
  // Nav tab deep-linking
  let url = location.href.replace(/\/$/, "");
  if (location.hash) {
    const hash = url.split("#");
    $('#navTabs button[href="#'+hash[1]+'"]').tab("show");
    url = location.href.replace(/\/#/, "#");
    history.replaceState(null, null, url);
    setTimeout(() => {
      $(window).scrollTop(0);
    }, 400);
  } else {
    $('#navTabs button[href="#home"]').tab("show");
  }
  $('button[data-toggle="tab"]').on("click", function() {
    let tabUrl;
    const hash = $(this).attr("href");
    if(hash == "#home") {
      tabUrl = url.split("#")[0];
    } else {
      tabUrl = url.split("#")[0] + hash;
    }
    tabUrl += "/";
    history.replaceState(null, null, tabUrl);
  });
});
