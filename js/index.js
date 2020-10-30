
 $(function() {
    var header = $(".menu-sec");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
    
        if (scroll >= 200) {
            header.removeClass('bgwhiteopac').addClass("bgwhite");
        } else {
            header.removeClass("bgwhite").addClass('bgwhiteopac');
        }
    });
    var header_ = $(".bb");
    $(window).scroll(function() {    
        var scroll_ = $(window).scrollTop();
        
    
        if (scroll_ >= 200) {
            header_.removeClass('bb-hide').addClass("bb-hide_");
        } else {
            header_.removeClass("bb-hide_").addClass('bb-hide');
        }
    });
});
            $('.Products-carosuel2').slick({
            dots: false,
            arrows:true,
            autoplay: true,
                 autoplaySpeed: 4000, 

            slidesToShow: 4,
            infinite:true,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            slidesToScroll: 4,
            responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
            });

            $('.Products-carosuel').slick({
            dots: false,
            arrows:true,
            speed: 300,
            slidesToShow: 4,
            autoplay: true,
                 autoplaySpeed: 4000, 
            infinite:true,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            slidesToScroll: 4,
            responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
            });
            
            $('.test_').slick({
             dots:true,
            centerMode: true,
            centerPadding: '80px',
            autoplay: true,
                 autoplaySpeed: 2000, 
            slidesToShow: 2,
            responsive: [
            {
            breakpoint: 768,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
            }
            ]
            });
                $('.brands').slick({

               autoplay: true,
                 autoplaySpeed: 2000, 
             dots:true,
            slidesToShow: 4,
            responsive: [
            {
            breakpoint: 2268,
            settings: {
            arrows: false,
            slidesToShow: 3,slidesToShow: 3,
            slidesToScroll: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
            arrows: false,
            slidesToShow: 1
            }
            }
            ]
            });

            
            // It checks to see if the span id #heart has "liked" class, if not it run the else statement and adds the "liked" class, on a 2nd click it see that it has the "liked" class so it replaces the ihherHTML and removes class, on 3rd click it runs the else statement again cause there is no "liked" class(remomved on 2nd click).
            
            $(document).ready(function(){
            $("#heart").click(function(){
            if($("#heart").hasClass("liked")){
            $("#heart").html('<i class="fa fa-heart-o" aria-hidden="true"></i>');
            $("#heart").removeClass("liked");
            }else{
            $("#heart").html('<i class="fa fa-heart" aria-hidden="true"></i>');
            $("#heart").addClass("liked");
            }
            });
            });
            $('.triggerSidebar2').click(function() {
                $('.Sidenavbar').css('right', '0px')
                $('.overlay2').css('display', 'block')
               })
               
               var kori = function() {
               $('.overlay2').css('display', 'none')
               $('.Sidenavbar').css('right', '-405px')
               }
               
               $('.hideSidebar2').click(kori)
               $('.overlay2').click(kori)
       
     
            $('.carosuel_').slick({
            
            infinite: true,
            speed: 500,
            arrows:false,   
            fade: true,
            autoplay: true,
              autoplaySpeed: 2000,  
            cssEase: 'linear'
            });
                  $('.solutions_carousel').slick({
               dots: false,   
              autoplay: true,
              autoplaySpeed: 2000,  
              arrows:false, 
               infinite: true,
               speed: 300,
               slidesToShow: 4,
               // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
               //   nextArrow: '<button class="slide-arrow next-arrow"></button>',
               slidesToScroll:4,
               responsive: [
                 {
                   breakpoint: 1024,
                   settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     infinite: true,
                     dots: false
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 2
                   }
                 },
                 {
                   breakpoint: 480,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
                 // You can unslick at a given breakpoint now by adding:
                 // settings: "unslick"
                 // instead of a settings object
               ]
             });
                 AOS.init();
        $('.wellness-carosuel').slick({
            dots: false,
            arrows:true,
            speed: 300,
            autoplay: true,
                 autoplaySpeed: 3500, 

            slidesToShow: 3,
            infinite:true,
            prevArrow: '<button class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slide-arrow next-arrow"></button>',
            slidesToScroll: 4,
            responsive: [
            {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
            },
            {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
            ]
            });
           $('.product-single').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.product-carosuel'
         });
         $('.product-carosuel').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.product-single',
          dots: true,
          centerMode: true,
          focusOnSelect: true
         });
             