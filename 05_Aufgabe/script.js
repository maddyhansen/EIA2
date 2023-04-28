"use strict";
var todoappIII;
(function (todoappIII) {
    //Ich hab noch um Aufschub gebeten aus folgenden Gründen: :)
    //Mir sind meine Fehler zu hundert Prozent bewusst, bin noch dabei zu fixen.
    //Ein Teil des ADs funktioniert, bin noch dabei den Rest zu machen 
    //Ich brauche eine For Schleife die die ganzen Values zieht, aber da häng ich grade noch rum, weil
    //das JSON mir grade noch nicht den Platzhalter ausgibt und noch ein paar andere Fehler in der Konsole ausgegeben werden..)
    //Das mir das JSON nicht ausgegeben wird liegt glaube ich dran, dass ich irgendwo was falsch anspreche. Finds aber nicht.
    console.log("Start");
    window.addEventListener('load', handleLoad);
    function handleLoad() {
        document.getElementById("newtodo").addEventListener('click', newTodo);
        document.getElementById("add").addEventListener('click', addToDO);
        deletebutton.addEventListener('click', deleteToDO);
        editbutton.addEventListener('click', editForm);
        document.getElementById("add").addEventListener('click', sendTask);
        let submit = document.querySelector("#add");
        submit.addEventListener("click", sendTask);
    }
    let deletebutton = document.createElement("button");
    deletebutton.setAttribute("id", "delete");
    deletebutton.innerHTML = "Delete";
    let editbutton = document.createElement("button");
    editbutton.setAttribute("id", "edit");
    editbutton.innerHTML = "Edit";
    editbutton.addEventListener('click', editForm);
    let newformular = document.createElement("div");
    newformular.setAttribute("id", "newtask");
    let newtask = document.createElement("p");
    newformular.setAttribute("id", "newtask");
    let form = document.querySelector('#formular');
    let formular = document.getElementById('hidden');
    let InformationBack = [];
    let formData = new FormData(form);
    function getValues() {
        let workTask = [];
        let value0 = formData.get('names');
        let value1 = formData.get('todo');
        let value2 = formData.get('date');
        let value3 = formData.get('comment');
        let value4 = formData.get('in_work');
        workTask = [value0, value1, value2, value3, value4];
        console.log(workTask);
        InformationBack = workTask;
        return InformationBack;
        console.log(InformationBack);
    }
    ;
    function generateTask() {
        formular.style.setProperty("visibility", "visible");
        getValues();
        document.getElementById("list").appendChild(newformular);
        document.querySelector("#list").appendChild(newtask);
        newtask.innerHTML = "WG-Mensch: " + InformationBack[0] + " ; Datum: " + InformationBack[2] + "  Kommentar: " + InformationBack[3] + "  To-Do: " + InformationBack[1] + " In Bearbeitung " + InformationBack[4];
        newtask.appendChild(deletebutton);
        newtask.appendChild(editbutton);
    }
    function deleteToDO() {
        console.log("Hi, I am done!");
        newformular.parentNode.removeChild(newtask);
        alert("Youre deleting the task.");
    }
    async function sendTask() {
        let query = new URLSearchParams(formData);
        await fetch("main.html?" + query.toString());
        alert("Submit Task");
    }
    async function communicate(_url) {
        let response = await fetch(_url);
        let offer = await response.text();
        let gotdata = JSON.parse(offer);
        // gotdata is empty, offer is a string, cant read the stuff out
        document.querySelector("#list").innerHTML = "WG-Mensch: " + offer;
        console.log(gotdata);
    }
    communicate("data.json");
    function newTodo() {
        form.style.setProperty("visibility", "visible");
        console.log("Hi, please fill the fields out for your ToDo");
    }
    function addToDO() {
        form.style.setProperty("visibility", "hidden");
        generateTask();
        sendTask();
        console.log("Hi, I am a ToDo added to the list!");
    }
    function editForm() {
        form.style.setProperty("visibility", "visible");
        deleteToDO();
        console.log("Hi, I am editing my todo");
        alert("Youre editing the task.");
    }
})(todoappIII || (todoappIII = {}));
//# sourceMappingURL=script.js.map