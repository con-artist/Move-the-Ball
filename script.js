obj = document.getElementById("ball");
obj.style.left = "0px";
obj.style.top = "0px";

function getKeyAndMove(e) {
  posLeft = parseInt(obj.style.left);
  posTop = parseInt(obj.style.top);

  var key_code = e.which || e.keyCode;
  if (key_code == 37) {
    if (document.getElementById("ball").offsetLeft > 5) {
      document.getElementById("ball").style.left = posLeft - 5 + "px";
    }
  } else if (key_code == 39) {
    if (
      document.getElementById("ball").offsetLeft <
      window.innerWidth - document.getElementById("ball").offsetWidth - 5
    ) {
      document.getElementById("ball").style.left = posLeft + 5 + "px";
    }
  } else if (key_code == 38) {
    if (document.getElementById("ball").offsetTop > 5) {
      document.getElementById("ball").style.top = posTop - 5 + "px";
    }
  } else if (key_code == 40) {
    if (
      document.getElementById("ball").offsetTop <
      window.innerHeight - document.getElementById("ball").offsetHeight - 5
    ) {
      document.getElementById("ball").style.top = posTop + 5 + "px";
    }
  }
}
