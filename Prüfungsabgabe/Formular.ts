namespace IceShop {

    export function giveOrder() {
        edit.addEventListener("click", editbtn);
        document.querySelector("#add")!.addEventListener("click", Orderbutton);
        submit.addEventListener("click", sendTask);
    }

    export interface data {
        [key: string]: FormDataEntryValue;
    };
    let edit = document.createElement("button");   // edit button erstellen
    edit.setAttribute("id", "edit");
    edit.innerHTML = "Edit";
    let newdiv = document.createElement("div");    // div element order  erstellen
    newdiv.setAttribute("id", "orders");
    let newP = document.createElement("p");    // p element für to do erstellen
    newP.setAttribute("id", "newp");
    let form: HTMLFormElement = document.querySelector('#myform')!;

    export let Orders: String[] = [];

    // aufruf bei order button
    export function getData(): String[] {

        let IceOrder: String[];

        let formData = new FormData(form);
        console.log(formData);
        let input0 = formData.get('scoop') as string;
        let input1 = formData.get('icecream') as string;
        let input2 = formData.get('toppings') as string;
        let input3 = formData.get('container') as string;

        IceOrder = [input0, input1, input2, input3];
        console.log("getData: " + IceOrder);
        Orders = IceOrder;
        return Orders;
    };

    export interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];
    }

    export let formData: FormData = new FormData(form);
    export let json: FormDataJSON = {};

    for (let key of formData.keys())
        if (!json[key]) {
            let values: FormDataEntryValue[] = formData.getAll(key);
            json[key] = values.length > 1 ? values : values[0];
        }

    export let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");

    export async function sendTask(_event: Event): Promise<void> { //link zum versenden funktioniert nicht
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        query.set("command", "insert");
        query.set("collection", "Order");
        query.set("data", JSON.stringify(json));
        await fetch("https://webuser.hs-furtwangen.de/~hansenma/database/?" + query.toString());
    }

    export async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let offer: string = await response.text();
        let gotdata: data = JSON.parse(offer);
        console.log("this" + gotdata);
        console.log("Response", response);
        console.log("before" + offer);
    }

    communicate("data.json");

    export function Orderbutton(e: any): any {
        getData();

        document.getElementById("list")!.appendChild(newdiv);
        document.querySelector("#list")!.appendChild(newP);

        newP.innerHTML = "Scoops: " + Orders[0] + ", <br> Flavour: " + Orders[1] + ", <br> Toppings: " + Orders[2] + "  <br> Container: " + Orders[3];
        e.preventDefault();
        newP.appendChild(edit);
        document.getElementById("order")!.classList.add("hidden");
    }

    function editbtn(): void {
        document.getElementById("order")!.classList.remove("hidden");
        document.getElementById("list")!.removeChild(newdiv);
        document.querySelector("#list")!.removeChild(newP);
    }

    function SupriseButton() {

    }


}