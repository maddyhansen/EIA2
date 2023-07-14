"use strict";
var IceShop;
(function (IceShop) {
    function giveOrder() {
        edit.addEventListener("click", editbtn);
        document.querySelector("#add").addEventListener("click", Orderbutton);
        IceShop.submit.addEventListener("click", sendTask);
    }
    IceShop.giveOrder = giveOrder;
    ;
    let edit = document.createElement("button"); // edit button erstellen
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div"); // div element order  erstellen
    newdiv.setAttribute("id", "orders");
    let newP = document.createElement("p"); // p element für to do erstellen
    newP.setAttribute("id", "newp");
    let form = document.querySelector('#myform');
    IceShop.Orders = [];
    // aufruf bei order button
    function getData() {
        let IceOrder;
        let formData = new FormData(form);
        console.log(formData);
        let input0 = formData.get('scoop');
        let input1 = formData.get('icecream');
        let input2 = formData.get('toppings');
        let input3 = formData.get('container');
        IceOrder = [input0, input1, input2, input3];
        console.log("getData: " + IceOrder);
        IceShop.Orders = IceOrder;
        return IceShop.Orders;
    }
    IceShop.getData = getData;
    ;
    IceShop.formData = new FormData(form);
    IceShop.json = {};
    for (let key of IceShop.formData.keys())
        if (!IceShop.json[key]) {
            let values = IceShop.formData.getAll(key);
            IceShop.json[key] = values.length > 1 ? values : values[0];
        }
    IceShop.submit = document.querySelector("#add");
    async function sendTask(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "insert");
        query.set("collection", "Order");
        query.set("data", JSON.stringify(IceShop.json));
        await fetch("https://webuser.hs-furtwangen.de/~hansenma/database/?" + query.toString());
    }
    IceShop.sendTask = sendTask;
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotdata = JSON.parse(offer);
        console.log("this" + gotdata);
        console.log("Response", response);
        console.log("before" + offer);
    }
    IceShop.communicate = communicate;
    communicate("data.json");
    function Orderbutton(e) {
        getData();
        document.getElementById("list").appendChild(newdiv);
        document.querySelector("#list").appendChild(newP);
        newP.innerHTML = "Scoops: " + IceShop.Orders[0] + ", <br> Flavour: " + IceShop.Orders[1] + ", <br> Toppings: " + IceShop.Orders[2] + "  <br> Container: " + IceShop.Orders[3];
        e.preventDefault();
        newP.appendChild(edit);
        document.getElementById("order").classList.add("hidden");
    }
    IceShop.Orderbutton = Orderbutton;
    function editbtn() {
        document.getElementById("order").classList.remove("hidden");
        document.getElementById("list").removeChild(newdiv);
        document.querySelector("#list").removeChild(newP);
    }
    function SupriseButton() {
    }
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Formular.js.map