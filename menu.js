
   $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
         loop:true,
         autoplay: true,
         autoplaySpeed:3000,
         margin:10,
         responsiveClass:true,
         responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            
            
        }
    }
    });
  });



