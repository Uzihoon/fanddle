function Open(selector, button, content, height){
    this._selector = null;
    this._button = null;
    this._content = null;
    this._height = null;

    this._init(selector, button, content, height);
    this._initEvent();
}

Open.prototype._init = function(selector, button, content, height) {
    this._selector = $(`.${selector}`);
    this._button = $(`.${button}`);
    this._content = $(`.${content}`);
    this._height = height;
}

Open.prototype._initEvent = function(){
    this._openAni();
}

Open.prototype._openAni = function() {
    const t = this;

    t._selector.on('click', function(){
        const contentHeight = $(this).find(t._content).innerHeight();
        console.log(contentHeight)
        t._selector.find(t._button).removeClass('openIcon');
        t._selector.stop().animate({
            'height': t._height+'px'
        })
        if($(this).height() == t._height) {
            $(this).stop().animate({
                'height': contentHeight+t._height+'px'
            })
            $(this).find(t._button).addClass('openIcon')

        } else {
            $(this).stop().animate({
                'height': t._height+'px'
            })
            $(this).find(t._button).removeClass('openIcon')
        }
    })
}