function MakeHeight(selector, item) {
    this._select = null;
    this._item = null;


    this._init(selector, item);
    this._initEvent();
}

MakeHeight.prototype._init = function (selector, item) {
    this._select = $(`.${selector}`);
    this._item = item;
}

MakeHeight.prototype._initEvent = function () {
    const t = this;


    // t._select.css('height', realHeight * itemList + 'px')

    t._select.each(function () {
        const t_item = $(this).find(`.${t._item}`);
        const realHeight = t_item.outerHeight(true);
        const itemList = t_item.length;

        $(this).css('height', realHeight * itemList +10+'px')
    })

}
