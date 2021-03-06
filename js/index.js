//File hooked with index.html
$(document).ready(function(){
  $(".button-collapse").sideNav();
  //Onclick stuff
  $('.twitterbtn').click(function(){
    twitter();
  });
  $('.youtubebtn').click(function(){
    youtube();
  });
  $('.githubbtn').click(function(){
    github();
  });
  $('.freecodecampbtn').click(function(){
    freecodecamp();
  });;
  $('.portfoliocard').click(function(){
    //Use data attributes for getting the link to open for specific card
    window.open('https://google.com');
  });
  //Sticky navigation
  var navOffSet = $("nav").offset().top;;

  $("nav").wrap('<div class="nav placeholder"></div>');
  $(".nav-placeholder").height($("nav").outerHeight);

  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();

    if(scrollPos >= navOffSet){
      $("nav").addClass("fixed");
    }else{
      $("nav").removeClass("fixed");
    }
  })
  var width = $('.justified').width();
  $('.justified').css('margin-left', '-' + (width / 2) + 'px');

  $('.button-collapse').sideNav({
    menuWidth: 240,
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  });
})
function twitter(){
  window.open("https://twitter.com/azbo400");
}
function youtube(){
  window.open("https://www.youtube.com/channel/UCEgc6SMmlV-H6_qCPwh_m_Q");
}
function github(){
  window.open("https://github.com/Azbo400");
}
function freecodecamp(){
  window.open("https://freecodecamp.com/azbo400");
}

//Typed JS stuff
$(function(){
    $(".caption").typed({
      strings: ["Hello there! I am a 13 year old boy passionate about Web Development", 
      "Hello there! I am a 13 year old boy passionate about JavaScript",
      "Hello there! I am a 13 year old boy passionate about FreeCodeCamp",
      "Hello there! I am a 13 year old boy passionate about Open Source",
      "Hello there! I am a 13 year old boy passionate about programming."],
      typeSpeed: 1
    });
});
