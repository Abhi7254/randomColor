function getRandomNumber() {
    return Math.floor(Math.random() * 256);
  }
  


let heading = document.querySelector('h1');
let btn = document.querySelector('button');
let div = document.querySelector('div');
let body = document.querySelector('body');

function setColor (){
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();

    heading.innerText = `RGB(${red}, ${green}, ${blue})`
    div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function setBodyColor (){
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();

    body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function random(){
    setBodyColor();
    setColor();
}

function rand(){
        
        setInterval(random, 2000);
}

btn.addEventListener("click",rand);
// btn.addEventListener("click",setBodyColor);
