/**
 * Created by Administrator on 2017/7/13.
 */
(function(doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var calFont= function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, calFont, false);
    doc.addEventListener('DOMContentLoaded', calFont, false);
})(document, window);