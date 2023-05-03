// export * from "./dopush.js";
// impory * from "./script1.js";

document.addEventListener('keydown', function(event) {
    if (event.code == "Backquote" ) {
        textarea.innerHTML += KEYBOARD.Backquote ;
        div1.style.background = "blue" ;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == "Backquote" && ( event.code == "ShiftLeft" || event.code == "ShiftRight" )) {
        textarea.innerHTML += "~" ;
        div1.style.background = "blue" ;
    }
});

document.addEventListener('keyup', function(event) {
    div1.style.background = "rgb(32, 27, 27)";
});

//====