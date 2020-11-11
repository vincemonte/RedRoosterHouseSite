function isMobile() {
  var check = false;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  check = true;
  }
  return check;
};

if( isMobile() == false ) {
 window.addEventListener("scroll", resizeElementsOnScroll);
}

function resizeElementsOnScroll() {
  resizeJumbotron();
  resizeNavBar();
}


function resizeJumbotron(){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    document.getElementById("site-jumbotron").style.padding = ".3em";
  }
  else{
    document.getElementById("site-jumbotron").style.padding = "20em 5em";
  }
}

function resizeNavBar(){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    document.getElementById("navigation-bar").style.padding = "0";
    document.getElementById("nav-list-container").style.fontSize="19px";
    var x = document.getElementById("nav-restaurant-name");
    x.style.fontSize = "40px";
    x = document.getElementById("navbar-brand");
    x.style.width = "65px";
    x.style.height = "65px";
  }
  else{
    document.getElementById("navigation-bar").style.padding = ".5em";
    document.getElementById("nav-list-container").style.fontSize = "21px";
    var x = document.getElementById("nav-restaurant-name");
    x.style.fontSize = "50px";
    x = document.getElementById("navbar-brand");
    x.style.width = "85px";
    x.style.height = "85px";
  }
}
