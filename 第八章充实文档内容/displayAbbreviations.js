function displayAbbreviations() {
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    for (let i = 0; i < abbreviations.length; i++) {
        var definition = abbreviations[i].getAttribute("title");//abbr节点的title属性
        var key = abbreviations[i].lastChild.nodeValue;//dbbr节点的文本元素
        defs[key] =definition;//保存到数组中
    }
    var dlist = document.createElement("dl");//创建节点
    for (key in defs) {
        var definition = defs[key];
        var dtitle = document.createElement("dt");//创建节点
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);//添加文本属性
        var ddesc = document.createElement("dd");//创建节点
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);//添加文本属性
        dlist.appendChild(dtitle);//添加dt节点
        dlist.appendChild(ddesc);//添加dd节点
    }
    var header = document.createElement("h2");//创建节点
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);//添加文本属性
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);