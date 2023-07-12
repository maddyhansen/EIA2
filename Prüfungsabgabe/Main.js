"use strict";
var IceShop;
(function (IceShop) {
    window.addEventListener('load', handleLoad);
    function handleLoad() {
        document.getElementById("add").addEventListener('click', IceShop.addToDO);
        deletebutton.addEventListener('click', deleteToDO);
        editbutton.addEventListener('click', IceShop.editForm);
        document.getElementById("add").addEventListener('click', sendTask);
        let submit = document.querySelector("#add");
        submit.addEventListener("click", sendTask);
    }
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Main.js.map