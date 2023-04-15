namespace todoappII {
    console.log("Start")

    //window.addEventListener('load', handleLoad); (Rausgeflogen weil TS es mir zerschossen hat und die sachen dann immer neu geladen hat. Ich arbeite da dran, falls es sich nicht lösen lässt nehme ich es aus dem Diagramm raus, weil ich es ja schon gezeichnet habe vor dem coden :))

    document.getElementById("newtodo")!.addEventListener('click', newTodo);
    document.getElementById("add")!.addEventListener('click', addToDO);

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
        let newformular = document.createElement("div");
        newformular.setAttribute("id", "newtask");
        let newtask = document.createElement("p");
        newformular.setAttribute("id", "newtask");
        document.getElementById("list")!.appendChild(newformular);
        document.querySelector("#list")!.appendChild(newtask);
        newtask.innerHTML = "WG-Mensch: " + InformationBack[0] + " ; Datum: " + InformationBack[2] + "  Kommentar: " + InformationBack[3] + "  To-Do: " + InformationBack[1] + " In Bearbeitung "  + InformationBack[4];
        
        let deletebutton = document.createElement("button");
        deletebutton.setAttribute("id", "delete");
        deletebutton.innerHTML = "Delete";
    
        let editbutton = document.createElement("button");
        editbutton.setAttribute("id", "edit");
        editbutton.innerHTML = "Edit";
        editbutton!.addEventListener('click', editForm);
        
        newtask.appendChild(deletebutton);
        newtask.appendChild(editbutton);

        function deleteToDO() {
            console.log("Hi, I am done!")
            newformular!.parentNode!.removeChild(newtask);
        }

        deletebutton!.addEventListener('click', deleteToDO);
    }


    function newTodo() {
        form!.style.setProperty("visibility", "visible");
        console.log("Hi, please fill the fields out for your ToDo")
    } 

    function addToDO() {
        form!.style.setProperty("visibility", "hidden");
        generateTask();
        console.log("Hi, I am a ToDo added to the list!")
    }

    function editForm() {
        form!.style.setProperty("visibility", "visible");
        console.log("Hi, I am editing my todo")
    }

}