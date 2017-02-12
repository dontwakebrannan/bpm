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
    var img = elem.querySelector('img');
    var wrapWidth = this.wrap.offsetWidth;
    var wrapHeight = this.wrap.offsetHeight;
    var imgWidth = img.naturalWidth;
    var imgHeight = img.naturalHeight;
    var ratio = imgWidth / imgHeight;

    var newImgWidth = wrapWidth;
    var newImgHeight = Math.round(newImgWidth / ratio);

    if (newImgHeight > wrapHeight) {
        newImgHeight = wrapHeight;
        newImgWidth = Math.round(newImgHeight * ratio);
    }

    if (wrapHeight > newImgHeight) {
        var marginTop = Math.round((wrapHeight - newImgHeight) / 2);
        img.style.marginTop = marginTop + 'px';
    } else {
        img.style.marginTop = 0;
    }

    img.style.width = newImgWidth + 'px';
    img.style.height = newImgHeight + 'px';
}
