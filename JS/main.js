$(window).on('load', function() {

    // Loading
    $(".box-loading").delay(0).fadeOut('slow', function () {
        $(this).remove().fadeOut();
    });

    ///////////////////////////////////////////
    
    // Set Same Height Of Two Section
    var height = $(".main-section .details").innerHeight();
    $(".main-section .name").css({
        minHeight: height
    });

    $(window).resize(function () {
        var height1 = $(".main-section .details").innerHeight();
        $(".main-section .name").css({
            minHeight: height1
        });
    });
    
    ///////////////////////////////////////////

    // Navbar on Scroll Animation
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 60) {
            $('.nav-bar').addClass('active-nav');
        } else {
            $('.nav-bar').removeClass('active-nav');
        }
    });

    var Top = 0;
    $(window).on('scroll',function(){
      var scrollTop = $(this).scrollTop();
      if (scrollTop > Top)    {
        $('.nav-bar').addClass('animate');
      } else {
        $('.nav-bar').removeClass('animate');
      }
      Top = scrollTop;
    });

    ///////////////////////////////////////////

    // ScrollTop Button
    $('.scroll').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 1200);
    });
  
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.scroll').css({
                opacity: 1,
                bottom: '3%'
            });
        } else {
            $('.scroll').css({
                opacity: 0,
                bottom: '90%'
            });
        }
    });

    /////////////////////////////////////////////
    
    // Init Owl Carousel (Slider)
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        dots: true,
        autoplay: true,
        smartSpeed: 700
    });

    // Init AOS (Animation)
    AOS.init();

});