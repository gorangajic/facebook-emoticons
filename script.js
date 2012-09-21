function loadScript() {
  a = setTimeout(function() {
    if(document.readyState == "complete") {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://raw.github.com/feroc1ty/facebook-emoticons/master/emoticons.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'emoticons'));
    } else {
      loadScript();
    }
  }, 3000);
}
loadScript();