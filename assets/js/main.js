$(".search").click(function(){
  $("#search-part").slideDown()
})

$(".close").click(function(){
  $("#search-part").slideUp()
})

$(".btt").click(function(){
  $("html,body").animate({
    scrollTop:0
  },100)
})

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".menu").addClass("test")
  }else{
    $(".menu").removeClass("test")
  }

  if($(window).scrollTop() > 600){
    $(".btt").fadeIn()
  }else{
    $(".btt").fadeOut()
  }
})

$('.venobox').venobox();

$('.service-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  autoplay: true,  
  dots: false,
  arrows: true,
  centerMode: true,
  centerPadding: "0",  
  prevArrow: '<i class="fas fa-angle-up up"></i>',
  nextArrow: '<i class="fas fa-angle-down down"></i>',


  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
    }
  }
  ]

});


$('.testi-img-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  centerMode: true,
  centerPadding: "0",  
  autoplay: true,
  prevArrow: '<i class="fas fa-angle-up testi_up"></i>',
  nextArrow: '<i class="fas fa-angle-down testi_down"></i>',
  asNavFor: '.testi_details-slider',


  responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      prevArrow: '<i class="fas fa-angle-left testi_up"></i>',
      nextArrow: '<i class="fas fa-angle-right testi_down"></i>',
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      prevArrow: '<i class="fas fa-angle-left testi_up"></i>',
      nextArrow: '<i class="fas fa-angle-right testi_down"></i>',

    }
  }
  ]



});



$('.testi_details-slider').slick({
  infinite: true,
  slidesToShow: 1,
  autoplay: true,
  slidesToScroll: 1,
  vertical: true,
  dots: false,
  arrows: false,
  asNavFor: '.testi-img-slider',

  responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
    }
  }
  ]


});



$('.counter').counterUp({
  delay: 10,
  time: 1000
});




$('.sponser-slider').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  centerPadding: "0",
  arrows: false,


  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  }
  ]

});


// responsive

