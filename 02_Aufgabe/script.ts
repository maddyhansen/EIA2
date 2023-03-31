namespace eventuebung {

  console.log("Hallo Start")
  window.addEventListener('load', handleLoad)

  let span: HTMLElement = document.createElement("span");
  span.innerHTML = "span";
  span.className = "span";
  document.querySelector("#div0")!.appendChild(span);

  function btn(): void {
    console.log("hi ich funktioniere")
  }

  function handleLoad(): void {
    document.querySelector("button")?.addEventListener('click',btn);
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
    span.style.left = positionx + "px";
    span.style.top = positiony + "px";
    span.innerText = "Mouseposition: x : " + positionx + ", Y: " + positiony + _event.target;
  }

  function logInfo(_event: Event): void {
    console.log(_event.target, _event.currentTarget, _event.type, _event);
  }

  function customEvent(_event: MouseEvent): void {
    const customEvent = new CustomEvent('BubblemeupBob', {
      bubbles: true, 
      detail:{bubble: setInfoBox}});
      document.querySelector('button')!.dispatchEvent(customEvent)
  }
}