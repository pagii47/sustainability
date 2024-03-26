$(function(){
    // Add unique ID of carousel into function if duplicating
    $('#enhancedCardCarouselIndicators_1, #enhancedCardCarouselIndicators_2').on('touchstart', function(event){
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function(event){
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5;
    
            if (Math.floor(xClick - xMove) > sensitivityInPx) {
                $(this).carousel('next');
            }
            else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                $(this).carousel('prev');
            }
        });
        $(this).on('touchend', function(){
            $(this).off('touchmove');
        });
    });

    // Add unique ID of carousel into function if duplicating
    $('#enhancedCardCarouselIndicators_1, #enhancedCardCarouselIndicators_2').on('slid.bs.carousel', function() {
        $(this).children().removeClass("active");
        $(this).siblings('.enhanced-card-text-indicator-container').children().children().removeClass("active");
        activeSlideIndicator = $(this).find(".carousel-indicators li.active").data("slide-to");
        $(this).siblings('.enhanced-card-text-indicator-container').find("[data-slide-to='" + activeSlideIndicator + "']").addClass("active");
        showOrHideControl($(this));
        $(this).siblings('.enhanced-card-text-indicator-container').find("[data-slide-to='" + activeSlideIndicator + "']")[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });

    // Add unique ID of text indicator of carousel into function with the div selector if duplicating
    $("#enhancedCardTextIndicators_1 > div, #enhancedCardTextIndicators_2 > div").on( "click", function() {
        $(this).parent().children().removeClass("active");
        $(this).parent().find("[data-slide-to='" +  $(this).data("slide-to") + "']").addClass("active");
        $(this).parent().parent().siblings('.carousel').carousel(parseInt($(this).data("slide-to")));
    });

    $('.enhanced-card-container').each(() => {
        let mainCarouselObj = $(this).find('.carousel');
        showOrHideControl(mainCarouselObj);
    })

    function showOrHideControl(instance) {
        var itemFirst = instance.find('.carousel-inner .carousel-item:first-child');
        var itemLast = instance.find('.carousel-inner .carousel-item:last-child');
        var controlLeft = instance.find('.carousel-control-prev');
        var controlRight = instance.find('.carousel-control-next');

        if (itemFirst.hasClass('active')) {
            controlLeft.hide();
            controlRight.show();
        }
        else if (itemLast.hasClass('active')) {
            controlLeft.show();
            controlRight.hide();
        } else {
            controlLeft.show();
            controlRight.show();
        }
    }

    // $('#enhancedCardCarouselIndicators').on('slid.bs.carousel', function() {
    //     $("#enhancedCardTextIndicators > div").removeClass("active");
    //     activeSlideIndicator = $(".carousel-indicators li.active").data("slide-to");
    //     $("#enhancedCardTextIndicators").find("[data-slide-to='" + activeSlideIndicator + "']").addClass("active");
    //     showOrHideControl();
    //     $("#enhancedCardTextIndicators").find("[data-slide-to='" + activeSlideIndicator + "']")[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // });

    // $("#enhancedCardTextIndicators > div" ).on( "click", function() {
    //     $("#enhancedCardTextIndicators > div").removeClass("active");
    //     $(".carousel-indicators li").removeClass("active");

    //     $("#enhancedCardTextIndicators").find("[data-slide-to='" +  $(this).data("slide-to") + "']").addClass("active");
    //     $(".carousel-indicators").find("[data-slide-to='" +  $(this).data("slide-to") + "']").addClass("active");

    //     $('#enhancedCardCarouselIndicators').carousel(parseInt($(this).data("slide-to")));
    // });
});