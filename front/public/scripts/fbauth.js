var finished_rendering = function() {
  console.log("finished rendering plugins");
  var spinner = document.getElementById("spinner");
  spinner.removeAttribute("style");
  spinner.removeChild(spinner.childNodes[0]);
  spinner.removeChild(spinner.childNodes[1]);
}
FB.Event.subscribe('xfbml.render', finished_rendering);