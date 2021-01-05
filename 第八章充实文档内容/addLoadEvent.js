function addLoadEvent(fuc) {
    var oldonload = window.onload;
    if (typeof(window.onload) != 'function') {
        window.onload = fuc;
    } else {
        window.onload = function() {
            oldonload();
            fuc();
        }
    }
}