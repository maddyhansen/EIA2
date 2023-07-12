namespace IceShop{

    window.addEventListener('load', handleLoad);
    function handleLoad(): void {
        document.getElementById("add")!.addEventListener('click', addToDO);
        deletebutton!.addEventListener('click', deleteToDO);
        editbutton.addEventListener('click', editForm)
        document.getElementById("add")!.addEventListener('click', sendTask);
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#add");
        submit.addEventListener("click", sendTask);
    }
}