// window.onload = function() {
//     let para = document.createElement("p");
//     let testdiv = document.getElementById("testdiv");
//     testdiv.appendChild(para);
//     let text = document.createTextNode("Hello world!");
//     para.appendChild(text);
// }

window.onload = function() {
    let para = document.createElement("p");
    let text1 = document.createTextNode("Today is another")
    para.appendChild(text1);
    let em = document.createElement("em");
    let text2 = document.createTextNode("beautiful ");
    em.appendChild(text2);
    para.appendChild(em);
    let text3 = document.createTextNode("day");
    para.appendChild(text3);
    let testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);

}