namespace todoappII {
console.log("Start")

window.addEventListener('load', handleLoad);

function handleLoad(): void {
    document.getElementById("newtodo")!.addEventListener('click', newTodo);
    document.getElementById("edit")!.addEventListener('click', editForm);
    document.getElementById("add")!.addEventListener('click', addToDO);
    document.getElementById("delete")!.addEventListener('click', deleteToDO);
  }


function newTodo(){
    console.log("Hi, please fill the fields out for your ToDo")
}

function editForm(){
    console.log("Hi, I am editing my todo")
}

function addToDO() {
    console.log("Hi, I am a ToDo added to the list!")
}

function deleteToDO() {
    console.log("Hi, I am done!")
}
}