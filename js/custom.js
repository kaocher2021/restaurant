$(function(){

  $('.back-to-top').click(function(){

    $('html, body').animate({scrollTop:0}, 1000);

  });


    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade:true,
        speed:1500,
        arrows:false,
      });

      $('.venobox').venobox(); 

      

});