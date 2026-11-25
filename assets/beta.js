// Send phones straight to their beta; computers keep both buttons.
(function () {
  var TF = 'https://testflight.apple.com/join/VZxPs2MQ';
  var GP = 'https://play.google.com/apps/testing/app.jitz';
  var ua = navigator.userAgent || '';
  var p = /iPhone|iPod/.test(ua) ? 'iPhone' : /Android/.test(ua) ? 'Android' : null;
  if (!p) return;
  var url = p === 'iPhone' ? TF : GP;
  var other = p === 'iPhone' ? 'Android' : 'iPhone';
  var otherUrl = p === 'iPhone' ? GP : TF;
  var arrow = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>';
  function run() {
    document.querySelectorAll('.beta-head').forEach(function (a) { a.href = url; });
    document.querySelectorAll('.beta').forEach(function (g) {
      g.classList.add('is-one');
      g.innerHTML = '<div class="beta-one"><a class="gb" href="' + url + '">Join the ' + p + ' beta' + arrow + '</a>' +
        '<div class="beta-alt">Not on&nbsp;' + p + '?<a href="' + otherUrl + '">&nbsp;Get the ' + other + ' beta</a></div></div>';
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
