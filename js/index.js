
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