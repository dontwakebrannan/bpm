var Image = function(wrap) {
    if (wrap) {
        this.wrap = wrap;
    }
}

Image.prototype.createImage = function(url, elem, fit){
    var newImage = document.createElement('img');
    newImage.setAttribute('data-src', '');
    newImage.setAttribute('data-type', 'lazy');
    elem.appendChild(newImage);
    var that = this;
    newImage.onload = function() {
        this.removeAttribute('data-src');
        this.className = 'loaded';
        if (fit) {
            that.fitToWrapper(elem);
        }
    }
    newImage.setAttribute('src', url);
}

Image.prototype.fitToWrapper = function(elem) {
    var wrapWidth = this.wrap.offsetWidth;
    var winHeight = window.innerHeight - document.querySelector('header[role=banner]').offsetHeight;
    var img = this.wrap.querySelector('img');
    var imgWidth = img.offsetWidth;
    var imgHeight = img.offsetHeight;
    var ratio = Math.round(imgWidth / imgHeight);

    var imgWidth = wrapWidth;
    var imgHeight = Math.round(imgWidth / ratio);

    if (imgHeight > winHeight) {
        imgHeight = winHeight;
        imgWidth = Math.round(imgHeight * ratio);
    }

    img.style.width = imgWidth + 'px';

    if (winHeight > imgHeight) {
        var marginTop = Math.round((winHeight - img.offsetHeight) / 2);
        img.style.marginTop = marginTop + 'px';
    } else {
        img.style.marginTop = 0;
        img.style.marginLeft = 'auto';
        img.style.marginRight = 'auto';
    }
}
