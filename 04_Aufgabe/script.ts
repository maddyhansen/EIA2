namespace todoappII {
    console.log("Start")

    const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#formular');

    let InformationBack: string[]=[];

    function getValues(): string[] {
        let workTask: string []=[]; 
        const form: HTMLFormElement = <HTMLFormElement>document.querySelector('#formular');

        let formData = new FormData(form);
        console.log(formData);
        let value0 = formData.get('names') as string; 
        let value1 = formData.get('todo') as string; 
        let value2 = formData.get('date') as string; 
        let value3 = formData.get('comment') as string; 
        let value4 = formData.get('in_work') as string; 

        workTask = [value0, value1, value2, value3, value4]
        
        workTask = InformationBack

    }

   /* interface formular { 
        name: string;
        date: string;
        ToDo: string;
        comment: string;
        workin: string;
    }*/

    /*interface Data {
        [category: string]: formular[];
    }*/

    /***********/

    let formular = document.getElementById('hidden')
    // let ToDo1 = document.getElementById('list')

    //let todo1: HTMLSpanElement = document.createElement("div");
    //todo1.classList.add("Arraywasnicht existiert");
    //document.querySelector('Arraywasnicht existiert')!.appendChild(div);

    window.addEventListener('load', handleLoad);

    function handleLoad(): void {
        document.getElementById("newtodo")!.addEventListener('click', newTodo);
        document.getElementById("edit")!.addEventListener('click', editForm);
        document.getElementById("add")!.addEventListener('click', addToDO);
        document.getElementById("delete")!.addEventListener('click', deleteToDO);
    }

    function newTodo() {
        formular!.style.setProperty("visibility", "visible");
        console.log("Hi, please fill the fields out for your ToDo")
    }

    function editForm() {
        console.log("Hi, I am editing my todo")
    }

    function addToDO() {
        console.log("Hi, I am a ToDo added to the list!")
    }

    function deleteToDO() {
        console.log("Hi, I am done!")
    }
}