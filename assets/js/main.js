(function(){
    var wrap = document.querySelector('.carousel');
    var carousel = new Carousel(wrap);

    var width = wrap.offsetWidth;
    var height = wrap.offsetHeight;

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
        width = wrap.offsetWidth;
        height = wrap.offsetHeight;
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
