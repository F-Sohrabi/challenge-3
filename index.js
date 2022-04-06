let switches = Array.from(document.querySelectorAll('input'));
switches.forEach(switchElement => switchElement.addEventListener("click",setRandom));

function setRandom(e){
    switches.forEach(switchElement => {
       if(switchElement != e.currentTarget){
        let random = Math.random() < 0.5;
        switchElement.checked = random;
       }
    });
}