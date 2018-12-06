let menuBtn = $("#menuBar");

menuBtn.click(function(){

  $('.hamburger-menu').toggleClass('animate');

  if($(".secondaryMenu").hasClass("active")){

    $(".secondaryMenu").removeClass("active");
    setTimeout(function(){
      $(".primaryMenu").addClass("active");
    },400);


  } else {
    $(".primaryMenu").removeClass("active");

    setTimeout(function(){
      $(".secondaryMenu").addClass("active");
    },350);
  }
});

$(document).ready(function(){
  var elements = $(".sidebar > .main-info *");

  for(let i = 0; i < elements.length; i++){
    setTimeout(function(){
      $(elements[i].tagName).addClass("bs");
    }, (400 * i) - 90 * i );
  }

  setTimeout(function(){
    $(".main-content").addClass("active");
  }, 1300);

});