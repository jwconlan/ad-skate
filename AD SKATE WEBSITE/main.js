$(document).ready(function(){

      const menuToggle = document.querySelector('#menu-button-container');
      const menuBurger = document.querySelector('.menu-toggle-button');
let classCheck = false;
menuToggle.addEventListener('click', function () {
  if (!classCheck) {
    $( "#nav" ).addClass( "displayMenu" );
    $( "#nav" ).removeClass( "slide-out" );
    $( "#nav" ).addClass( "slide-in" );
    $( ".navOptionItem" ).addClass( ".opacity" );
    $( "body" ).addClass( "fixedClass" );
    $("#overlayMenu").css("display", "block");
    $("#learnMoreBtn").css("z-index", "10");
    menuBurger.classList.add('open');
    menuBurger.classList.add('hover-close');
    classCheck = true;

  } else {
    $( "#nav" ).removeClass( "displayMenu" );
    $( "#nav" ).addClass( "slide-out" );
    $( "#nav" ).removeClass( "slide-in" );
    $( ".navOptionItem" ).removeClass( ".opacity" );
    $( "body" ).removeClass( "fixedClass" );
    $("#overlayMenu").css("display", "none");
    $("#learnMoreBtn").css("z-index", "50");
    menuBurger.classList.remove('open');
    menuBurger.classList.remove('hover-close');
    classCheck = false;
  }
})
        
  });
  