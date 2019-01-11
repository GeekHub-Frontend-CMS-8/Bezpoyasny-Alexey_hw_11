$('.slick').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 100,
});

$('.testimonials-slick').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 100,
});

jQuery(document).ready(function($) {
    $('.elements-gride').masonry({
        // options
        itemSelector: '.element-item',
        columnWidth: '.persent-size',
        percentPosition: true
    });
});

$(function(){
    $('#menu').slicknav();
});