lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

/*
jQuery(".nav_item").on('click', function () {
    elementClick = jQuery(this).attr("href");
    alert(jQuery(this).attr("data-anchor"));
    destination = jQuery(elementClick).offset().top;
    jQuery("body").animate({scrollTop: destination - 50}, 600);
    return false;
});
*/

jQuery('.nav_item').on('click', function() {
    var scroll_elem = jQuery(this).attr('data-anchor');
    if (jQuery(scroll_elem).length != 0) {
        jQuery('html, body').animate({ scrollTop: $(scroll_elem).offset().top }, 1100);
    }
    return false;
});

jQuery('#details_btn').on('click', function() {
    jQuery('.dark_layer').fadeIn(300, function() {
        $("html,body").css("overflow","hidden");
        jQuery('.popup').fadeIn(300);
    });
});

jQuery('.dark_layer').on('click', function() {
        jQuery('.popup').fadeOut(300, function() {
            jQuery('.dark_layer').fadeOut(300);
            $("html,body").css("overflow","auto");
        });
});
