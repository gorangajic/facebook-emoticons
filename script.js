function loadScript() {
  console.log('hi');
  a = setTimeout(function() {
    if(document.readyState == "complete") {
      console.log('completed');
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        console.log(d);
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://raw.github.com/feroc1ty/facebook-emoticons/master/emoticons.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'emoticons'));
    } else {
      console.log('notcompleted', a);
      loadScript();
    }
  }, 3000);
}
loadScript();