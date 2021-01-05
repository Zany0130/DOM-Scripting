function showPic(whichpic) {
    let source = whichpic.getAttribute("href");
    let placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source); 
    
    let text = whichpic.getAttribute("title");
    let description = document.getElementById("description");
    // alert(description.childNode[0].nodeValue);
    description.firstChild.nodeValue = text;
    
}
function countBodyChildren() {
    let body_element = document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
    alert(body_element.nodeType);
}
// window.onload = countBodyChildren;

