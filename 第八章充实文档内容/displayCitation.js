function displayCitation() {
    // if (document.getElementsByTagName || !document.createElement
    //     || !document.createTextNode) return false;

    var quotes = document.getElementsByTagName("blockquote");
    for (let i = 0; i < quotes.length; i++) {
        if (!quotes[i].getAttribute("cite")) continue;//continue跳出本次循环，不再执行循环内的其他语句
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");
        if (quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length - 1];

        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);

        var superscript = document.createElement("sup");
        superscript.appendChild(link);

        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitation);
