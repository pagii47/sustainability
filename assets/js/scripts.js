$( window ).on( "load", function() {
    $('.carousel-indicators').insertAfter($('.carousel-control-prev'));
    $('.carousel-indicators:nth-child(3)').remove();
    $('#home-mega-menu, #mobile-mega-menu, #collapse-headerEX1, #collapse-headerEX2, #collapse-headerEX3, #collapse-headerEX4, #collapse-headerEX5').removeClass('show');
    console.log("en");
} );