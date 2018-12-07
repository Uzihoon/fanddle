function FanddleSlide(selecotr, imgClass, naviBox, naviClass) {
    this._sliderBox = null;
    this._images = null;
    this._indexItems = null;
    this._currentIndex = -1;
    this._imgWidth = 0;
    this._animation = null;
    this._naviBox = null;
    this._navi = null;
    this._naviClass = null;
    //slide
    this._slideList = null;

    this._init(selecotr, imgClass, naviBox, naviClass);
    this._initEvet();
}

FanddleSlide.prototype._init = function(selecotr, imgClass, naviBox, naviClass) {
    this._sliderBox = document.getElementById(selecotr);
    this._images = document.getElementsByClassName(imgClass);
    this._imgWidth = this._sliderBox.clientWidth;
    this._naviBox = document.getElementById(naviBox);
    this._naviClass = naviClass;

    this._slideList = $(`.${imgClass}`);
}

FanddleSlide.prototype._initEvet = function() {
    const t = this;
    this._resetImg();
    let nextNum = 0;
    setInterval(function(){
        ++t._currentIndex;
        if(t._currentIndex == t._slideList.length-1) {
            nextNum = 0;
        } else if(t._currentIndex >= t._slideList.length){
            t._currentIndex = 0;
            nextNum = t._currentIndex+1;
        } else {
            nextNum = t._currentIndex+1;
        }
        t.slideShow(t._currentIndex, nextNum);
    },3500)
}

FanddleSlide.prototype._resetImg = function(){
    const t = this;
    const width = t._sliderBox.clientWidth;
    this._slideList.css({
        'left': `${width}px`
    })

    this._slideList.eq(0).css({
        'left': '0px',
        'opacity': '1'
    })


    for(let i = 0; i < t._images.length; i++) {
        let navi = document.createElement('span');
        navi.classList.add(t._naviClass);

        t._naviBox.appendChild(navi);
    }

    this._navi = $(`.${t._naviClass}`);

    t._navi.eq(0).addClass('actived')

}


FanddleSlide.prototype.slideShow = function(index, nextIndex) {
    const t = this;
    const now = index;
    const next = nextIndex;
    let after = next+1;
    let slideIndex = 0;
    const width = t._sliderBox.clientWidth;

    
    t._slideList.eq(index).stop().animate({
        'left': `-${width}px`,
    },800);
    
    t._slideList.eq(next).stop().animate({
        'left': '0',
        'opacity': '1'
    },800)

    if(after >= t._slideList.length) {
        after = 0;
    }

    t._slideList.eq(after).css('left', `${width}px`)

    t._navi.each(function(){
        t._navi.removeClass('actived')
    })

    t._navi.eq(next).addClass('actived');
}
