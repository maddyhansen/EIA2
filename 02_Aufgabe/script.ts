namespace eventuebung {
  console.log("Hallo Start")
  window.addEventListener('load', handleLoad)

  function handleLoad(): void {
    document.addEventListener('mousemove', setInfoBox);
    document.addEventListener('click', logInfo);
    document.addEventListener('keyup', logInfo);
    document.body.addEventListener('click', logInfo);
    document.body.addEventListener('keyup', logInfo);
    document.getElementById('div0')!.addEventListener('click', logInfo);
    document.getElementById('div0')!.addEventListener('keyup', logInfo);
    document.getElementById('div1')!.addEventListener('click', logInfo);
    document.getElementById('div1')!.addEventListener('keyup', logInfo);
  }

  function setInfoBox(_event: MouseEvent): void {
    let positionx: number = _event.clientX;
    let positiony: number = _event.clientY;

    let span: HTMLElement = document.createElement("span1");
    span.innerHTML = "span";
    span.className = "span";
    document.querySelector("#div0")!.appendChild(span)
    span.innerText = "Mouseposition: x : " + positionx + ", Y: " + positiony + _event.target;
    span.setAttribute('style', 'right: positionx + value + 10px');
    //span.setAttribute('style','right: positiony + value + 10px');
  }

  function logInfo(_event: Event): void {
    console.log(_event.target, _event.currentTarget, _event.type, _event)
  }

}