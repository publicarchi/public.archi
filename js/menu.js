window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navigation");
var sticky = navigation.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
