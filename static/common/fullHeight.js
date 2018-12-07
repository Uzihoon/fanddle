function FullHeight(selector) {
    this._selector = null;
    this._winHeight = null;

    this._widthSelector = null;
    this._widthList = null;

    this._init(selector);
    this._initEvent();
}

FullHeight.prototype._init = function(selector){
    this._selector = document.getElementById(selector);
    this._winHeight = screen.height;
}

FullHeight.prototype._initEvent = function(){
    this._setting();
    console.log(this._winHeight)
}

FullHeight.prototype._setting = function() {
    this._selector.style.minHeight = this._winHeight+'px';
}

FullHeight.prototype.fullWidth = function(selector,li) {
    this._widthSelector = $(`.${selector}`)
    this._widthList = $(`.${li}`);

    const listWidth = this._widthList.outerWidth(true);
    const btnWidth = this._widthList.outerWidth();
    const realWidth = listWidth*(this._widthList.length+1);
    console.log(realWidth)

    this._widthSelector.css('width',realWidth)

}