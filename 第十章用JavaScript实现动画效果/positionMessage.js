function positionMessage() {
    var elem = document.getElementById("message");
    elem.style.position = "absolute";
    elem.style.left = "500px";
    elem.style.top = "500px";
    // movement = setTimeout("moveMessage()",5000);//五秒后改变页面内的元素位置
}
window.onload = positionMessage();