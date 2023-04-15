namespace todoappII {
    console.log("Start")

    /*ladet alle eventlistener*/

    //window.addEventListener('load', handleLoad);

         document.getElementById("newtodo")!.addEventListener('click', newTodo);
         document.getElementById("add")!.addEventListener('click', addToDO);
         document.getElementById("add")!.addEventListener('click', addToDO);


    const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#formular');
    let div = <HTMLElement>document.querySelector("#hidden");
    let formular = document.getElementById('hidden')
    let InformationBack: string[] = [];

    /*Button edit und delete erstellt*/
    let deletebutton = document.createElement("button");
    deletebutton.setAttribute("id", "delete");
    deletebutton.innerHTML = "Delete";

    let editbutton = document.createElement("button");
    editbutton.setAttribute("id", "edit");
    editbutton.innerHTML = "Edit";
    deletebutton!.addEventListener('click', deleteToDO);
    editbutton!.addEventListener('click', editForm);

    /*holt die values aus dem html */
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

    /*macht das div mit aufgabe, extra funktion */
    function generateTask(e : any) {
        formular!.style.setProperty("visibility", "visible");
        getValues();
        let newformular = document.createElement("div");
        newformular.setAttribute("id", "newtask");
        let newtask = document.createElement("span");
        newformular.setAttribute("id", "newtask");
        document.getElementById("div1")!.appendChild(newformular);
        document.querySelector("#div1")!.appendChild(newtask);
        newtask.innerHTML = "To-Do: " + InformationBack[0] + " ; Datum: " + InformationBack[1] + "  Kommentar: " + InformationBack[2] + "  WG-Mensch: " + InformationBack[3];

        newtask.appendChild(deletebutton);
        newtask.appendChild(editbutton);
        e.preventDefault();
    }

    /***********/


    function newTodo() {
        formular!.style.setProperty("visibility", "visible");
        console.log("Hi, please fill the fields out for your ToDo")
    } /***Erledigt, der tut was er tun soll */

    function addToDO() {
        generateTask(1);
        console.log("Hi, I am a ToDo added to the list!")
    }/*läuft nicht*/

    function editForm() {
        console.log("Hi, I am editing my todo")
    }/*noch nicht erledigt*/

    function deleteToDO() {
        console.log("Hi, I am done!")
    }/*noch nicht erledigt*/
}