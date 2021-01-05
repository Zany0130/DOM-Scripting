function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    let source = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source); 
    if (document.getElementById("description")) {
        let text = whichpic.getAttribute("title");
        let description = document.getElementById("description");
        // alert(description.childNode[0].nodeValue);
        description.firstChild.nodeValue = text;
    }
    
}

function countBodyChildren() {
    let body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}
// window.onload = countBodyChildren;

function prepareGallery() {
    //检查点
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("gallerypic")) return false;

    let gallery = document.getElementById("gallerypic");
    let links = gallery.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            showPic(this);
            return false;
        }
    }
}

// 共享onload事件
function addLoadEvent(func) {
    let oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

function preparePlaceholder() {
    let placeholder = document.createElement("img");
    placeholder.setAttribute("id", "placeholder");
    placeholder.setAttribute("src", "image/placeholder.jpg");
    placeholder.setAttribute("alt", "my image gallery");
    let description = document.createElement("P");
    description.setAttribute("id", "description");
    let desctext = document.createTextNode("Choose an image you like");
    description.appendChild(desctext);
    // document.body.appendChild(placeholder);
    // document.body.appendChild(description); 
    let gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

function insertAfter(newElement,targentElement) {
    let parent = targentElement.parentNode;
    if (parent.lastChild == targentElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targentElement.nextSibling);
    }
}

// 载入编写的函数
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);

