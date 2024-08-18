window.onscroll = function() {
    scroll();
 };

 function scroll() {
    if (
       document.body.scrollTop > 20 ||
       document.documentElement.scrollTop > 20
    ) {
       document.getElementById("nav-menu").style.top = "-60px";
    } else {
       document.getElementById("nav).style.top = "0";
    }
 }

