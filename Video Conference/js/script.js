
// burger
$(document).ready(function(){
  $('.navbar__burger').click(function(event){
    $('.navbar__burger,.nav_header,.navbar_button-group').toggleClass('active');
    $('body').toggleClass('block_body');
  });
});


// Fixed Header
  window.onscroll = function showNavbar() {
    var navbar = document.querySelector('.navbar');

    if (window.pageYOffset > 200){
      navbar.classList.add('navbar_fixed');
    }
    if (window.pageYOffset < 200) {
      navbar.classList.remove('navbar_fixed');
    }
  }

