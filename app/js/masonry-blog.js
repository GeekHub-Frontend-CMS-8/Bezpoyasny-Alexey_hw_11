jQuery(document).ready(function($) {
    $('.elements-gride').masonry({
        // options
        itemSelector: '.element-item',
        gutter: 15,
        isFitWidth: true
    });
});