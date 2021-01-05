// GET
// let paras = document.getElementsByTagName("p");
// for (let i = 0; i < paras.length; i++) {
//     let text_results = paras[i].getAttribute("title");
//     if (text_results) {
//         alert(text_results);
//     }
// }

// SET
let paras = document.getElementsByTagName("p");
for (i = 0; i < paras.length; i++) {
    let text_results = paras[i].getAttribute("title");
    if (text_results) {
        paras[i].setAttribute("title","brand new title text")
        alert(paras[i].getAttribute("title"));
    }
}

