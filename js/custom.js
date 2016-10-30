$(document).ready(function(){


/*   menu   */


$(".menu-toggle").click(function(){

	$(".menu").toggleClass("active-menu")

});

  $("body").click(function(event){
      if($(event.target).closest('.menu, .menu-toggle').length) return 0;
      else {
          $("body").removeClass('hide');
          $('.menu').removeClass('active-menu');
      }
  });



  /*   дізнатися більше на головному екрані  - не працює з fullpage.js   */

  
  // $(".arrow-bottom").click(function() {
  //   $("html, body").animate({ scrollTop: $("header").height()+70 }, "slow");
  //   return false;
  // });






/*   slick slider   */

$(".clients").slick({

  // normal options...
  infinite: true,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  // the magic
  responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true
      }

    }, {

      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        dots: true
      }

    }, {

      breakpoint: 300,
      settings: "unslick" // destroys slick

    }]
});


/*  projects resize*/

var $window = $(window);
$(window).bind("resize", checkPosition);

function checkPosition(){

  if ($window.innerWidth() <= 640) {
      
    $(".item.big img").attr("src", "images/item_small_1.jpg")
    $(".big").css({"width": "50%"})

  } else if ($window.innerWidth() > 640 && $window.innerWidth() <= 980){

    $(".item.big img").attr("src", "images/item_small_1.jpg")
    $(".big").css({"width": "33.333333%"})

} else{

  $(".item.big img").attr("src", "images/portfolio_big.jpg")
  $(".big").css({"width": "40%"})
}

};


/*  fullPabe.js   */

$("#fullpage").fullpage({
  anchors: ["firstPage", "secondPage", "thirdPage", "fourthPage"],
  menu: "#pagination"
});






}); //ready