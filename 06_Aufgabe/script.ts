namespace todoappIIII {


    console.log("Start")

    window.addEventListener('load', handleLoad);
    function handleLoad(): void {
        document.getElementById("newtodo")!.addEventListener('click', newTodo);
        document.getElementById("add")!.addEventListener('click', addToDO);
        deletebutton!.addEventListener('click', deleteToDO);
        editbutton.addEventListener('click', editForm)
        document.getElementById("add")!.addEventListener('click', sendTask);
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");
        submit.addEventListener("click", sendTask);
    }

    let deletebutton = document.createElement("button");
    deletebutton.setAttribute("id", "delete");
    deletebutton.innerHTML = "Delete";

    let editbutton = document.createElement("button");
    editbutton.setAttribute("id", "edit");
    editbutton.innerHTML = "Edit";
    editbutton!.addEventListener('click', editForm);

    let newformular = document.createElement("div");
    newformular.setAttribute("id", "newtask");
    let newtask = document.createElement("p");
    newformular.setAttribute("id", "newtask");

    let form: HTMLFormElement = <HTMLFormElement>document.querySelector('#formular');
    let formular = document.getElementById('hidden')
    let InformationBack: string[] = [];
    let formData = new FormData(form);

    export interface Task {
        name: string;
        todo: string;
        date: string;
        comment: string;
        in_work: string;
    }

    export interface Datainput {
        [key: string]: Task[];
    }

    function getValues(): string[] {
        let workTask: string[] = [];
        let value0 = formData.get('names') as string;
        let value1 = formData.get('todo') as string;
        let value2 = formData.get('date') as string;
        let value3 = formData.get('comment') as string;
        let value4 = formData.get('in_work') as string;

        workTask = [value0, value1, value2, value3, value4];
        console.log(workTask);
        InformationBack = workTask;
        return InformationBack;
        console.log(InformationBack);
    };

    interface FormDataJSON {
        [key: string]: FormDataEntryValue | FormDataEntryValue[];}
      
      let formData1: FormData = new FormData(form);
      let json: FormDataJSON = {};
      
      for (let key of formData1.keys())
        if (!json[key]) {
          let values: FormDataEntryValue[] = formData1.getAll(key);
          json[key] = values.length > 1 ? values : values[0];
        }

    function generateTask() {
        formular!.style.setProperty("visibility", "visible");
        getValues();
        document.getElementById("list")!.appendChild(newformular);
        document.querySelector("#list")!.appendChild(newtask);
        newtask.innerHTML = "WG-Mensch: " + InformationBack[0] + " ; Datum: " + InformationBack[2] + "  Kommentar: " + InformationBack[3] + "  To-Do: " + InformationBack[1] + " In Bearbeitung " + InformationBack[4];

        newtask.appendChild(deletebutton);
        newtask.appendChild(editbutton);
    }

    function deleteToDO() {
        console.log("Hi, I am done!")
        newformular!.parentNode!.removeChild(newtask);
        alert("Youre deleting the task.")
        //command=delete&collection=NameOfCollection&id=IdOfTheDocument
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        query.set("delete", "collection");
        query.set("collection", "ToDoOne");
        query.set("id", "id"); // wie sag ich ihm get id?
        query.set("data", JSON.stringify(json));
    }

    async function sendTask(): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        query.set("command", "insert");
        query.set("collection", "ToDoOne");
        query.set("data", JSON.stringify(json));
        await fetch("https://webuser.hs-furtwangen.de/~hansenma/database/?" + query.toString());
        console.log(fetch);
        alert("Submit Task");
    }

    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let offer: string = await response.text();
        let gotdata: Datainput = JSON.parse(offer);
        // gotdata is empty, offer is a string, cant read the stuff out
        document.querySelector("#list")!.innerHTML = "WG-Mensch: " + offer;
        console.log(gotdata);
    }
    communicate("data.json");

    function newTodo() {
        form!.style.setProperty("visibility", "visible");
        console.log("Hi, please fill the fields out for your ToDo")
    }

    function addToDO() {
        form!.style.setProperty("visibility", "hidden");
        generateTask();
        sendTask();
        console.log("Hi, I am a ToDo added to the list!")
    }

    function editForm() {
        form!.style.setProperty("visibility", "visible");
        deleteToDO();
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        query.set("delete", "collection");
        query.set("collection", "ToDoOne");
        query.set("data", JSON.stringify(json));
        console.log("Hi, I am editing my todo")
        alert("Youre editing the task.")
    }
}
