"use strict";
var IceShop;
(function (IceShop) {
    function giveOrder() {
        //drawOrder();
        SupriseButton();
        edit.addEventListener("click", editButton);
        document.querySelector("#add").addEventListener("click", orderButton);
        IceShop.submit.addEventListener("click", sendOrder);
        document.querySelector("#suprise").addEventListener("click", SupriseButton);
        deleteOrder();
    }
    IceShop.giveOrder = giveOrder;
    ;
    let edit = document.createElement("button");
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newOrder = document.createElement("div");
    newOrder.setAttribute("id", "orders");
    let newInfo = document.createElement("p");
    newInfo.setAttribute("id", "newp");
    let form = document.querySelector('#myform');
    IceShop.Orders = [];
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
    async function sendOrder(_event) {
        let formData = new FormData(form);
        let query = new URLSearchParams(formData);
        query.set("command", "insert");
        query.set("collection", "Order");
        query.set("data", JSON.stringify(IceShop.json));
        await fetch("https://webuser.hs-furtwangen.de/~hansenma/database/?" + query.toString());
    }
    IceShop.sendOrder = sendOrder;
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
    function orderButton(e) {
        getData();
        document.getElementById("list").appendChild(newOrder);
        document.querySelector("#list").appendChild(newInfo);
        newInfo.innerHTML = "Scoops: " + IceShop.Orders[0] + ", <br> Flavour: " + IceShop.Orders[1] + ", <br> Toppings: " + IceShop.Orders[2] + "  <br> Container: " + IceShop.Orders[3];
        e.preventDefault();
        newInfo.appendChild(edit);
        document.getElementById("order").classList.add("hidden");
    }
    IceShop.orderButton = orderButton;
    function editButton() {
        document.getElementById("order").classList.remove("hidden");
        document.getElementById("list").removeChild(newOrder);
        document.querySelector("#list").removeChild(newInfo);
    }
    async function deleteOrder() {
        console.log("Hi, I am done!");
        newOrder.parentNode.removeChild(newInfo);
        alert("Youre deleting the order.");
        let query = new URLSearchParams(IceShop.formData);
        query.set("command", "delete");
        query.set("collection", "Order");
        query.set("delete", "id");
        query.set("id", "?");
        await fetch("https://webuser.hs-furtwangen.de/~hansenma/database/?" + query.toString());
    }
    function SupriseButton() {
        //SupriseOrder(); 
        document.getElementById("order").classList.add("hidden");
    }
})(IceShop || (IceShop = {}));
//# sourceMappingURL=Formular.js.map