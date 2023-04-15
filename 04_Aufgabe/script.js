"use strict";
var todoappII;
(function (todoappII) {
    console.log("Start");
    /*ladet alle eventlistener*/
    //window.addEventListener('load', handleLoad);
    document.getElementById("newtodo").addEventListener('click', newTodo);
    document.getElementById("add").addEventListener('click', addToDO);
    const form = document.querySelector('#formular');
    let div = document.querySelector("#hidden");
    let formular = document.getElementById('hidden');
    let InformationBack = [];
    /*Button edit und delete erstellt*/
    /*holt die values aus dem html */
    function getValues() {
        let workTask = [];
        const form = document.querySelector('#formular');
        let formData = new FormData(form);
        console.log(formData);
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
    /*macht das div mit aufgabe, extra funktion */
    function generateTask() {
        formular.style.setProperty("visibility", "visible");
        getValues();
        let newformular = document.createElement("div");
        newformular.setAttribute("id", "newtask");
        let newtask = document.createElement("p");
        newformular.setAttribute("id", "newtask");
        document.getElementById("list").appendChild(newformular);
        document.querySelector("#list").appendChild(newtask);
        newtask.innerHTML = "To-Do: " + InformationBack[0] + " ; Datum: " + InformationBack[1] + "  Kommentar: " + InformationBack[2] + "  WG-Mensch: " + InformationBack[3];
        let deletebutton = document.createElement("button");
        deletebutton.setAttribute("id", "delete");
        deletebutton.innerHTML = "Delete";
        let editbutton = document.createElement("button");
        editbutton.setAttribute("id", "edit");
        editbutton.innerHTML = "Edit";
        editbutton.addEventListener('click', editForm);
        newtask.appendChild(deletebutton);
        newtask.appendChild(editbutton);
        function deleteToDO() {
            console.log("Hi, I am done!");
            newformular.parentNode.removeChild(newtask);
        } /*noch nicht erledigt*/
        deletebutton.addEventListener('click', deleteToDO);
    }
    /***********/
    function newTodo() {
        form.style.setProperty("visibility", "visible");
        console.log("Hi, please fill the fields out for your ToDo");
    }
    function addToDO() {
        form.style.setProperty("visibility", "hidden");
        generateTask();
        console.log("Hi, I am a ToDo added to the list!");
    }
    function editForm() {
        form.style.setProperty("visibility", "visible");
        console.log("Hi, I am editing my todo");
    } /*noch nicht erledigt*/
})(todoappII || (todoappII = {}));
//# sourceMappingURL=script.js.map