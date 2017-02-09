(function(){
    var wrap = document.querySelector('.carousel');
    var slider = wrap.querySelector('.slider');
    var carousel = new Carousel(wrap);

    var width = slider.offsetWidth;
    var height = slider.offsetHeight;

    carousel.setCarouselSize(width * Carousel.slideCount, height);
    carousel.setSlideSizes(width, height);
    carousel.setup();

    var noscripts = document.querySelectorAll('noscript');

    for (var i = 0; i < noscripts.length; i++) {
        var url = noscripts[i].getAttribute('data-src');
        var elem = noscripts[i].parentNode;
        var img = new Image(elem);
        img.createImage(url, elem, true);
    }

    var resizeWindowHandler = throttle(function(){
        // Carousel resizing
        width = slider.offsetWidth;
        height = slider.offsetHeight;
        carousel.setCarouselSize(width * Carousel.slideCount, height);
        carousel.setSlideSizes(width, height);

        // Image resizing
        for (var i = 0; i < noscripts.length; i++) {
            var elem = noscripts[i].parentNode;
            img.fitToWrapper(elem);
        }
    }, 300);

    window.onresize = resizeWindowHandler;

})();
