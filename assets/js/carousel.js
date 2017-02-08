var Carousel = function(wrap) {
    this.wrap = wrap;
    this.slider = wrap.querySelector('.slider');
    this.slideWrap = this.wrap.querySelector('.slide-wrap');
    this.slides = this.wrap.querySelectorAll('.slide');
    this.slideCount = this.slides.length;
    this.prev = wrap.querySelector('.prev');
    this.next = wrap.querySelector('.next');
};

Carousel.prototype.setup = function() {
    var that = this;
    window.mySwipe = new Swipe(this.slider, {
        startSlide: 0,
        draggable: true,
        autoRestart: false,
        continuous: false,
        disabledScroll: false,
        stopPropagation: true,
        callback: function(index, element) {
            if (mySwipe.getPos() == 0) {
                that.prev.style.display = 'none';
            } else {
                that.prev.style.display = 'block';
            }
            if (mySwipe.getPos() == mySwipe.getNumSlides() - 1) {
                that.next.style.display = 'none';
            } else {
                that.next.style.display = 'block';
            }
        },
        transitionEnd: function(index, elem) {}
    });

    if (this.prev || this.next) {
        if (mySwipe.getPos() == 0) {
            that.prev.style.display = 'none';
        } else if (mySwipe.getPos() == mySwipe.getNumSlides() - 1) {
            that.next.style.display = 'none';
        }
        this.prev.addEventListener('click', function(){
            mySwipe.prev();
        });
        this.next.addEventListener('click', function(){
            mySwipe.next();
        });
    }
}

Carousel.prototype.setCarouselSize = function(width, height) {
    this.slideWrap.style.width = width + 'px';
    this.slideWrap.style.height = height + 'px';
}

Carousel.prototype.setSlideSizes = function(width, height) {
    for (var i = 0; i < this.slides.length; i++) {
        this.slides[i].style.width = width + 'px';
        this.slides[i].style.height = height + 'px';
    }
}
