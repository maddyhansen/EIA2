namespace todoappIII {
    console.log("Start")

    window.addEventListener('load', handleLoad);
    function handleLoad(): void {
        document.getElementById("newtodo")!.addEventListener('click', newTodo);
        document.getElementById("add")!.addEventListener('click', addToDO);
        deletebutton!.addEventListener('click', deleteToDO);
        editbutton.addEventListener('click', editForm)
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



    //New Stuff
    async function communicate(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        console.log("Response", response);

        let offer: string = await response.text();
        console.log(offer);
        InformationBack = JSON.parse(offer); //In string umwandeln?
    }

    communicate("data.json");
    console.log(communicate);

    //End New stuff

    const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#formular');
    let formular = document.getElementById('hidden')
    let InformationBack: string[] = [];

    function getValues(): string[] {
        let workTask: string[] = [];
        const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#formular');
        let formData = new FormData(form);
        console.log(formData);
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
    }

    function sendTask() {

    }

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
        console.log("Hi, I am editing my todo")
    }

}