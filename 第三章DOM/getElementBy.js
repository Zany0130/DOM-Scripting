        // alert(typeof document.getElementById("purchases"));

        // alert(document.getElementsByTagName("li").length);
        // for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
        //     alert(typeof document.getElementsByTagName("li")[i]);
        // }

        // 查询id为purchases的元素，包含多少列表项
        let shopping = document.getElementById("purchases");
        let items = shopping.getElementsByTagName("*");
        alert("ID为purchases的列表个数为："+ items.length);

        function getElelmentByClassName(node, classname) {
            if (node.getElelmentByClassName) {
                return node.getElelmentByClassName(classname);
            } else {
                let results = new Array();
                let elems = node.getElementsByTagName("*");
                for (let i = 0; i < elems.length; i++) {
                    if (elems[i].classname.indexOf(classname) != -1) {
                        results[results.length] = elems[i];
                    }
                }
                return results;
            }
        }