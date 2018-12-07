function ClickSlide (selector, slideList, left, right, navi, naviClass) {
    this._slideImg = null;
    this._slideBox = null;
    this._leftBtn = null;
    this._RightBtn = null;
    this._index = -1;
    this._boxWidth = null;
    this._naviBox = null;
    this._naviClass = null;
    this._navi = null;

    this._init(selector, slideList, left, right, navi, naviClass);
    this._initEvent();
}

ClickSlide.prototype._init = function(selector, slideList, left, right, navi, naviClass) {
    this._slideBox = document.getElementById(selector);
    this._slideImg = $(`.${slideList}`);
    this._leftBtn = $(`.${left}`)
    this._RightBtn = $(`.${right}`);
    this._boxWidth = this._slideBox.clientWidth;
    this._naviBox = document.getElementById(navi);
    this._naviClass = naviClass;
}

ClickSlide.prototype._initEvent = function(){
    this._reset();
    this._slideEvent(++this._index);
    this.slideNext();
}

ClickSlide.prototype._reset = function() {
    const t = this;
    const height = t._slideImg.css('height');
    
    // t._slideBox.style.height = height;

    t._slideImg.css('left',t._boxWidth+'px');
    t._slideImg.eq(0).css('left', 0);

    for(let i = 0; i < t._slideImg.length; i++) {
        let navi = document.createElement('span');
        navi.classList.add(t._naviClass);

        t._naviBox.appendChild(navi);
    }

    
    this._navi = $(`.${t._naviClass}`);
    t._navi.eq(0).addClass('actived')
}

ClickSlide.prototype._slideEvent = function(index){
    const t = this;
    const now = index
    const before = now-1;
    const after = now+1;

    if(before < 0)  {
        t._leftBtn.css('display','none')
    } else {
        t._leftBtn.css('display','block')
    }

    if(after >= t._slideImg.length) {
        t._RightBtn.css('display','none');
    } else {
        t._RightBtn.css('display','block');
    }



}

ClickSlide.prototype.slideNext = function(){
    const t = this;
    let nowIndex = 0;
    let after;
    let before;

    t._RightBtn.on('click', function(){
        after = nowIndex+1;
        t._slideImg.eq(nowIndex).stop().animate({
            'left': -t._boxWidth+'px'
        })
        t._slideImg.eq(after).stop().animate({
            'left': 0
        })
        t._slideEvent(after)
        t.changeNavi(after);

        nowIndex = after;
        console.log(`nowIndex${nowIndex}, after${after}`)
    })

    t._leftBtn.on('click', function(){
        before = nowIndex-1;
        console.log(`nowIndex${nowIndex}, before${before}`)
        t._slideImg.eq(nowIndex).stop().animate({
            'left': t._boxWidth+'px'
        })
        t._slideImg.eq(before).stop().animate({
            'left': 0
        })
        nowIndex = before;
        t._slideEvent(before)
        t.changeNavi(before);
    })
}

ClickSlide.prototype.changeNavi = function(index) {
    const active = index;
    const t = this;
    t._navi.each(function(){
        t._navi.removeClass('actived');
    })

    t._navi.eq(active).addClass('actived')
}