function popUp(winURL) {
    window.open(winURL, "popup", "weight=320, height=480")
}

window.onload = prepareLinks;
function prepareLinks() {
    let links = document.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "popup") {
            links[i].onclick = function() {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}