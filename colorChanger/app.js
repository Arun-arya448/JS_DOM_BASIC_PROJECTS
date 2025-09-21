const body = document.querySelector("body");
const Buttons = document.querySelectorAll(".button");

Buttons.forEach( (button) =>{
    button.addEventListener("click", (event) => {
        if(event.target.id === "grey"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id;
        }
    });
});