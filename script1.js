// export * from "./script1.js";
// import * from "./dopush.js";

const KEYBOARD = {
    Backquote: "`",
    Digit1: "1",

};

let div = document.createElement('div');
div.className = "wripper";
//textarea.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
document.body.append(div);

let header = document.createElement('header');
header.className = "header";
div.append(header);

let h1 = document.createElement('h1');
h1.className = "texth1";
header.append(h1);
h1.innerHTML = "RSS VIRTUAL KEYBOARD";

let main = document.createElement('main');
main.className = "main";
div.append(main);

let textarea = document.createElement('textarea');
textarea.className = "textarea";
main.append(textarea);

let section = document.createElement('section');
section.className = "keyboard";
main.append(section);

/*============*/

let section1 = document.createElement('div');
section1.className = "section1";
section.append(section1);

let div1 = document.createElement('div');
div1.className = "tilda";
section1.append(div1);

let p1 = document.createElement('p');
p1.className = "textBut1";
div1.append(p1);
p1.innerHTML = "~";

let p2 = document.createElement('span');
p2.className = "textBut2";
div1.append(p2);
p2.innerHTML = "`";

div1.addEventListener("click", () => {
    textarea.innerHTML += KEYBOARD.Backquote;
})

document.addEventListener('keydown', function (event) {
    if (event.code == "Backquote") {
        textarea.innerHTML += KEYBOARD.Backquote;
        div1.style.background = "blue";
        div1.style.borderTopRightRadius = "10px";
        div1.style.borderBottomRightRadius = "10px";
        div1.style.borderBottomLeftRadius = "10px";
        div1.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div1.style.background = "rgb(32, 27, 27)";
    div1.style.borderTopRightRadius = "3px";
    div1.style.borderBottomRightRadius = "3px";
    div1.style.borderBottomLeftRadius = "3px";
    div1.style.borderTopLeftRadius = "3px";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Backquote" && (event.code == "ShiftLeft" || event.code == "ShiftRight")) {
        textarea.innerHTML += "~";
        div1.style.background = "blue";
        div1.style.borderTopRightRadius = "10px";
        div1.style.borderBottomRightRadius = "10px";
        div1.style.borderBottomLeftRadius = "10px";
        div1.style.borderTopLeftRadius = "10px";
    }
});





// function keyupBackgr( event , dv ) {
//     dv.style.background = "rgb(32, 27, 27)";
// }

// document.addEventListener( "keyup", keyupBackgr( div1 ) );

// document.addEventListener('keydown', function(event) {
//     if (event.code == "Backquote" ) {
//         textarea.innerHTML += KEYBOARD.Backquote ;

//     }
// });

// function keyDown() {

// };

//====

let div2 = document.createElement('div');
div2.className = "tilda";
section1.append(div2);

let p3 = document.createElement('p');
p3.className = "textBut1";
div2.append(p3);
p3.innerHTML = "!";

let p4 = document.createElement('p');
p4.className = "textBut2";
div2.append(p4);
p4.innerHTML = "1";

div2.addEventListener("click", () => {
    textarea.innerHTML += KEYBOARD.Digit1;
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit1') {
        textarea.innerHTML += KEYBOARD.Digit1;
        div2.style.background = "blue";
        div2.style.borderTopRightRadius = "10px";
        div2.style.borderBottomRightRadius = "10px";
        div2.style.borderBottomLeftRadius = "10px";
        div2.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div2.style.background = "rgb(32, 27, 27)";
    div2.style.borderTopRightRadius = "3px";
    div2.style.borderBottomRightRadius = "3px";
    div2.style.borderBottomLeftRadius = "3px";
    div2.style.borderTopLeftRadius = "3px";
});

//====

let div3 = document.createElement('div');
div3.className = "tilda";
section1.append(div3);

let p5 = document.createElement('p');
p5.className = "textBut1";
div3.append(p5);
p5.innerHTML = "@";

let p6 = document.createElement('p');
p6.className = "textBut2";
div3.append(p6);
p6.innerHTML = "2";

div3.addEventListener("click", () => {
    textarea.innerHTML += "2";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit2') {
        textarea.innerHTML += "2";
        div3.style.background = "blue";
        div3.style.borderTopRightRadius = "10px";
        div3.style.borderBottomRightRadius = "10px";
        div3.style.borderBottomLeftRadius = "10px";
        div3.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div3.style.background = "rgb(32, 27, 27)";
    div3.style.borderTopRightRadius = "3px";
    div3.style.borderBottomRightRadius = "3px";
    div3.style.borderBottomLeftRadius = "3px";
    div3.style.borderTopLeftRadius = "3px";
});

//====

let div4 = document.createElement('div');
div4.className = "tilda";
section1.append(div4);

let p7 = document.createElement('p');
p7.className = "textBut1";
div4.append(p7);
p7.innerHTML = "#";

let p8 = document.createElement('p');
p8.className = "textBut2";
div4.append(p8);
p8.innerHTML = "3";

div4.addEventListener("click", () => {
    textarea.innerHTML += "3";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit3') {
        textarea.innerHTML += "3";
        div4.style.background = "blue";
        div4.style.borderTopRightRadius = "10px";
        div4.style.borderBottomRightRadius = "10px";
        div4.style.borderBottomLeftRadius = "10px";
        div4.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div4.style.background = "rgb(32, 27, 27)";
    div4.style.borderTopRightRadius = "3px";
    div4.style.borderBottomRightRadius = "3px";
    div4.style.borderBottomLeftRadius = "3px";
    div4.style.borderTopLeftRadius = "3px";
});

//====

let div5 = document.createElement('div');
div5.className = "tilda";
section1.append(div5);

let p9 = document.createElement('p');
p9.className = "textBut1";
div5.append(p9);
p9.innerHTML = "$";

let p10 = document.createElement('p');
p10.className = "textBut2";
div5.append(p10);
p10.innerHTML = "4";

div5.addEventListener("click", () => {
    textarea.innerHTML += "4";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit4') {
        textarea.innerHTML += "4";
        div5.style.background = "blue";
        div5.style.borderTopRightRadius = "10px";
        div5.style.borderBottomRightRadius = "10px";
        div5.style.borderBottomLeftRadius = "10px";
        div5.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div5.style.background = "rgb(32, 27, 27)";
    div5.style.borderTopRightRadius = "3px";
    div5.style.borderBottomRightRadius = "3px";
    div5.style.borderBottomLeftRadius = "3px";
    div5.style.borderTopLeftRadius = "3px";
});

//======

let div6 = document.createElement('div');
div6.className = "tilda";
section1.append(div6);

let p11 = document.createElement('p');
p11.className = "textBut1";
div6.append(p11);
p11.innerHTML = "%";

let p12 = document.createElement('p');
p12.className = "textBut2";
div6.append(p12);
p12.innerHTML = "5";

div6.addEventListener("click", () => {
    textarea.innerHTML += "5";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit5') {
        textarea.innerHTML += "5";
        div6.style.background = "blue";
        div6.style.borderTopRightRadius = "10px";
        div6.style.borderBottomRightRadius = "10px";
        div6.style.borderBottomLeftRadius = "10px";
        div6.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div6.style.background = "rgb(32, 27, 27)";
    div6.style.borderTopRightRadius = "3px";
    div6.style.borderBottomRightRadius = "3px";
    div6.style.borderBottomLeftRadius = "3px";
    div6.style.borderTopLeftRadius = "3px";
});

//====


let div7 = document.createElement('div');
div7.className = "tilda";
section1.append(div7);

let p13 = document.createElement('p');
p13.className = "textBut1";
div7.append(p13);
p13.innerHTML = "^";

let p14 = document.createElement('p');
p14.className = "textBut2";
div7.append(p14);
p14.innerHTML = "6";

div7.addEventListener("click", () => {
    textarea.innerHTML += "6";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit6') {
        textarea.innerHTML += "6";
        div7.style.background = "blue";
        div7.style.borderTopRightRadius = "10px";
        div7.style.borderBottomRightRadius = "10px";
        div7.style.borderBottomLeftRadius = "10px";
        div7.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div7.style.background = "rgb(32, 27, 27)";
    div7.style.borderTopRightRadius = "3px";
    div7.style.borderBottomRightRadius = "3px";
    div7.style.borderBottomLeftRadius = "3px";
    div7.style.borderTopLeftRadius = "3px";
});

//====

let div8 = document.createElement('div');
div8.className = "tilda";
section1.append(div8);

let p15 = document.createElement('p');
p15.className = "textBut1";
div8.append(p15);
p15.innerHTML = "&";

let p16 = document.createElement('p');
p16.className = "textBut2";
div8.append(p16);
p16.innerHTML = "7";

div8.addEventListener("click", () => {
    textarea.innerHTML += "7";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit7') {
        textarea.innerHTML += "7";
        div8.style.background = "blue";
        div8.style.borderTopRightRadius = "10px";
        div8.style.borderBottomRightRadius = "10px";
        div8.style.borderBottomLeftRadius = "10px";
        div8.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div8.style.background = "rgb(32, 27, 27)";
    div8.style.borderTopRightRadius = "3px";
    div8.style.borderBottomRightRadius = "3px";
    div8.style.borderBottomLeftRadius = "3px";
    div8.style.borderTopLeftRadius = "3px";
});

//====

let div9 = document.createElement('div');
div9.className = "tilda";
section1.append(div9);

let p17 = document.createElement('p');
p17.className = "textBut1";
div9.append(p17);
p17.innerHTML = "*";

let p18 = document.createElement('p');
p18.className = "textBut2";
div9.append(p18);
p18.innerHTML = "8";

div9.addEventListener("click", () => {
    textarea.innerHTML += "8";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit8') {
        textarea.innerHTML += "8";
        div9.style.background = "blue";
        div9.style.borderTopRightRadius = "10px";
        div9.style.borderBottomRightRadius = "10px";
        div9.style.borderBottomLeftRadius = "10px";
        div9.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div9.style.background = "rgb(32, 27, 27)";
    div9.style.borderTopRightRadius = "3px";
    div9.style.borderBottomRightRadius = "3px";
    div9.style.borderBottomLeftRadius = "3px";
    div9.style.borderTopLeftRadius = "3px";
});

//====

let div10 = document.createElement('div');
div10.className = "tilda";
section1.append(div10);

let p19 = document.createElement('p');
p19.className = "textBut1";
div10.append(p19);
p19.innerHTML = "(";

let p20 = document.createElement('p');
p20.className = "textBut2";
div10.append(p20);
p20.innerHTML = "9";

div10.addEventListener("click", () => {
    textarea.innerHTML += "9";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit9') {
        textarea.innerHTML += "9";
        div10.style.background = "blue";
        div10.style.borderTopRightRadius = "10px";
        div10.style.borderBottomRightRadius = "10px";
        div10.style.borderBottomLeftRadius = "10px";
        div10.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div10.style.background = "rgb(32, 27, 27)";
    div10.style.borderTopRightRadius = "3px";
    div10.style.borderBottomRightRadius = "3px";
    div10.style.borderBottomLeftRadius = "3px";
    div10.style.borderTopLeftRadius = "3px";
});

//====

let div11 = document.createElement('div');
div11.className = "tilda";
section1.append(div11);

let p21 = document.createElement('p');
p21.className = "textBut1";
div11.append(p21);
p21.innerHTML = ")";

let p22 = document.createElement('p');
p22.className = "textBut2";
div11.append(p22);
p22.innerHTML = "0";

div11.addEventListener("click", () => {
    textarea.innerHTML += "0";
})

document.addEventListener('keydown', function (event) {
    if (event.code == 'Digit0') {
        textarea.innerHTML += "0";
        div11.style.background = "blue";
        div11.style.borderTopRightRadius = "10px";
        div11.style.borderBottomRightRadius = "10px";
        div11.style.borderBottomLeftRadius = "10px";
        div11.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div11.style.background = "rgb(32, 27, 27)";
    div11.style.borderTopRightRadius = "3px";
    div11.style.borderBottomRightRadius = "3px";
    div11.style.borderBottomLeftRadius = "3px";
    div11.style.borderTopLeftRadius = "3px";
});

//====

let div12 = document.createElement('div');
div12.className = "tilda";
section1.append(div12);

let p23 = document.createElement('p');
p23.className = "textBut1";
div12.append(p23);
p23.innerHTML = "_";

let p24 = document.createElement('p');
p24.className = "textBut2";
div12.append(p24);
p24.innerHTML = "-";

div12.addEventListener("click", () => {
    textarea.innerHTML += "-";
})

document.addEventListener('keydown', function (event) {
    if (event.code == "Minus") {
        textarea.innerHTML += "-";
        div12.style.background = "blue";
        div12.style.borderTopRightRadius = "10px";
        div12.style.borderBottomRightRadius = "10px";
        div12.style.borderBottomLeftRadius = "10px";
        div12.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div12.style.background = "rgb(32, 27, 27)";
    div12.style.borderTopRightRadius = "3px";
    div12.style.borderBottomRightRadius = "3px";
    div12.style.borderBottomLeftRadius = "3px";
    div12.style.borderTopLeftRadius = "3px";
});

//====

let div13 = document.createElement('div');
div13.className = "tilda";
section1.append(div13);

let p25 = document.createElement('p');
p25.className = "textBut1";
div13.append(p25);
p25.innerHTML = "+";

let p26 = document.createElement('p');
p26.className = "textBut2";
div13.append(p26);
p26.innerHTML = "=";

div13.addEventListener("click", () => {
    textarea.innerHTML += "=";
})

document.addEventListener('keydown', function (event) {
    if (event.code == "Equal") {
        textarea.innerHTML += "=";
        div13.style.background = "blue";
        div13.style.borderTopRightRadius = "10px";
        div13.style.borderBottomRightRadius = "10px";
        div13.style.borderBottomLeftRadius = "10px";
        div13.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div13.style.background = "rgb(32, 27, 27)";
    div13.style.borderTopRightRadius = "3px";
    div13.style.borderBottomRightRadius = "3px";
    div13.style.borderBottomLeftRadius = "3px";
    div13.style.borderTopLeftRadius = "3px";
});

//====

let div14 = document.createElement('div');
div14.className = "backspace";
section1.append(div14);

let p27 = document.createElement('p');
p27.className = "textBut1";
div14.append(p27);
p27.innerHTML = "";

let p28 = document.createElement('p');
p28.className = "textButBackspace";
div14.append(p28);
p28.innerHTML = "Backspace";

div14.addEventListener("click", () => {
    textarea.innerHTML = textarea.innerHTML.slice(0, textarea.innerHTML.length - 1);
})

document.addEventListener('keydown', function (event) {
    if (event.code == "Backspace") {
        textarea.innerHTML = textarea.innerHTML.slice(0, textarea.innerHTML.length - 1);
        div14.style.background = "blue";
        div14.style.borderTopRightRadius = "10px";
        div14.style.borderBottomRightRadius = "10px";
        div14.style.borderBottomLeftRadius = "10px";
        div14.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div14.style.background = "black";
    div14.style.borderTopRightRadius = "3px";
    div14.style.borderBottomRightRadius = "3px";
    div14.style.borderBottomLeftRadius = "3px";
    div14.style.borderTopLeftRadius = "3px";
});

/*=======*/

let section2 = document.createElement('div');
section2.className = "section2";
section.append(section2);

let div15 = document.createElement('div');
div15.className = "tab";
section2.append(div15);

let p29 = document.createElement('p');
p29.className = "textBut1";
div15.append(p29);
p29.innerHTML = "";

let p30 = document.createElement('p');
p30.className = "textButBackspace";
div15.append(p30);
p30.innerHTML = "Tab";

div15.addEventListener("click", () => {
    textarea.innerHTML += "Tab";
})

document.addEventListener('keydown', function (event) {
    if (event.code == "Tab") {
        textarea.innerHTML += "Tab";
        div15.style.background = "blue";
        div15.style.borderTopRightRadius = "10px";
        div15.style.borderBottomRightRadius = "10px";
        div15.style.borderBottomLeftRadius = "10px";
        div15.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div15.style.background = "black";
    div15.style.borderTopRightRadius = "3px";
    div15.style.borderBottomRightRadius = "3px";
    div15.style.borderBottomLeftRadius = "3px";
    div15.style.borderTopLeftRadius = "3px";
});

//====

let div16 = document.createElement('div');
div16.className = "tilda";
section2.append(div16);

let p31 = document.createElement('p');
p31.className = "textBut1";
div16.append(p29);
p31.innerHTML = "";

let p32 = document.createElement('p');
p32.className = "textButBackspace";
div16.append(p32);
p32.innerHTML = "Q";

div16.addEventListener("click", () => {
    textarea.innerHTML += "q";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyQ") {
        textarea.innerHTML += "q";
        div16.style.background = "blue";
        div16.style.borderTopRightRadius = "10px";
        div16.style.borderBottomRightRadius = "10px";
        div16.style.borderBottomLeftRadius = "10px";
        div16.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div16.style.background = "rgb(32, 27, 27)";
    div16.style.borderTopRightRadius = "3px";
    div16.style.borderBottomRightRadius = "3px";
    div16.style.borderBottomLeftRadius = "3px";
    div16.style.borderTopLeftRadius = "3px";
});

//====

let div17 = document.createElement('div');
div17.className = "tilda";
section2.append(div17);

let p33 = document.createElement('p');
p33.className = "textBut1";
div17.append(p33);
p33.innerHTML = "";

let p34 = document.createElement('p');
p34.className = "textButBackspace";
div17.append(p34);
p34.innerHTML = "W";

div17.addEventListener("click", () => {
    textarea.innerHTML += "w";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyW") {
        textarea.innerHTML += "w";
        div17.style.background = "blue";
        div17.style.borderTopRightRadius = "10px";
        div17.style.borderBottomRightRadius = "10px";
        div17.style.borderBottomLeftRadius = "10px";
        div17.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div17.style.background = "rgb(32, 27, 27)";
    div17.style.borderTopRightRadius = "3px";
    div17.style.borderBottomRightRadius = "3px";
    div17.style.borderBottomLeftRadius = "3px";
    div17.style.borderTopLeftRadius = "3px";
});

//====

let div18 = document.createElement('div');
div18.className = "tilda";
section2.append(div18);

let p35 = document.createElement('p');
p35.className = "textBut1";
div18.append(p35);
p35.innerHTML = "";

let p36 = document.createElement('p');
p36.className = "textButBackspace";
div18.append(p36);
p36.innerHTML = "E";

div18.addEventListener("click", () => {
    textarea.innerHTML += "e";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyE") {
        textarea.innerHTML += "e";
        div18.style.background = "blue";
        div18.style.borderTopRightRadius = "10px";
        div18.style.borderBottomRightRadius = "10px";
        div18.style.borderBottomLeftRadius = "10px";
        div18.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div18.style.background = "rgb(32, 27, 27)";
    div18.style.borderTopRightRadius = "3px";
    div18.style.borderBottomRightRadius = "3px";
    div18.style.borderBottomLeftRadius = "3px";
    div18.style.borderTopLeftRadius = "3px";
});

//====

let div19 = document.createElement('div');
div19.className = "tilda";
section2.append(div19);

let p37 = document.createElement('p');
p37.className = "textBut1";
div19.append(p37);
p37.innerHTML = "";

let p38 = document.createElement('p');
p38.className = "textButBackspace";
div19.append(p38);
p38.innerHTML = "R";

div19.addEventListener("click", () => {
    textarea.innerHTML += "r";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyR") {
        textarea.innerHTML += "r";
        div19.style.background = "blue";
        div19.style.borderTopRightRadius = "10px";
        div19.style.borderBottomRightRadius = "10px";
        div19.style.borderBottomLeftRadius = "10px";
        div19.style.borderTopLeftRadius = "10px";
    }
});

document.addEventListener('keyup', function (event) {
    div19.style.background = "rgb(32, 27, 27)";
    div19.style.borderTopRightRadius = "3px";
    div19.style.borderBottomRightRadius = "3px";
    div19.style.borderBottomLeftRadius = "3px";
    div19.style.borderTopLeftRadius = "3px";
});

//====

let div20 = document.createElement('div');
div20.className = "tilda";
section2.append(div20);

let p39 = document.createElement('p');
p39.className = "textBut1";
div20.append(p39);
p39.innerHTML = "";

let p40 = document.createElement('p');
p40.className = "textButBackspace";
div20.append(p40);
p40.innerHTML = "T";

div20.addEventListener("click", () => {
    textarea.innerHTML += "t";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyT") {
        textarea.innerHTML += "t";
        div20.style.background = "blue";
        div20.style.borderTopRightRadius = "10px";
        div20.style.borderBottomRightRadius = "10px";
        div20.style.borderBottomLeftRadius = "10px";
        div20.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div20.style.background = "rgb(32, 27, 27)";
    div20.style.borderTopRightRadius = "3px";
    div20.style.borderBottomRightRadius = "3px";
    div20.style.borderBottomLeftRadius = "3px";
    div20.style.borderTopLeftRadius = "3px";
});

//====

let div21 = document.createElement('div');
div21.className = "tilda";
section2.append(div21);

let p41 = document.createElement('p');
p41.className = "textBut1";
div21.append(p41);
p41.innerHTML = "";

let p42 = document.createElement('p');
p42.className = "textButBackspace";
div21.append(p42);
p42.innerHTML = "Y";

div21.addEventListener("click", () => {
    textarea.innerHTML += "y";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyY") {
        textarea.innerHTML += "y";
        div21.style.background = "blue";
        div21.style.borderTopRightRadius = "10px";
        div21.style.borderBottomRightRadius = "10px";
        div21.style.borderBottomLeftRadius = "10px";
        div21.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div21.style.background = "rgb(32, 27, 27)";
    div21.style.borderTopRightRadius = "3px";
    div21.style.borderBottomRightRadius = "3px";
    div21.style.borderBottomLeftRadius = "3px";
    div21.style.borderTopLeftRadius = "3px";
});

//====

let div22 = document.createElement('div');
div22.className = "tilda";
section2.append(div22);

let p43 = document.createElement('p');
p43.className = "textBut1";
div22.append(p43);
p43.innerHTML = "";

let p44 = document.createElement('p');
p44.className = "textButBackspace";
div22.append(p44);
p44.innerHTML = "U";

div22.addEventListener("click", () => {
    textarea.innerHTML += "u";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyU") {
        textarea.innerHTML += "u";
        div22.style.background = "blue";
        div22.style.borderTopRightRadius = "10px";
        div22.style.borderBottomRightRadius = "10px";
        div22.style.borderBottomLeftRadius = "10px";
        div22.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div22.style.background = "rgb(32, 27, 27)";
    div22.style.borderTopRightRadius = "3px";
    div22.style.borderBottomRightRadius = "3px";
    div22.style.borderBottomLeftRadius = "3px";
    div22.style.borderTopLeftRadius = "3px";
});

//====

let div23 = document.createElement('div');
div23.className = "tilda";
section2.append(div23);

let p45 = document.createElement('p');
p45.className = "textBut1";
div23.append(p45);
p45.innerHTML = "";

let p46 = document.createElement('p');
p46.className = "textButBackspace";
div23.append(p46);
p46.innerHTML = "I";

div23.addEventListener("click", () => {
    textarea.innerHTML += "i";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyI") {
        textarea.innerHTML += "i";
        div23.style.background = "blue";
        div23.style.borderTopRightRadius = "10px";
        div23.style.borderBottomRightRadius = "10px";
        div23.style.borderBottomLeftRadius = "10px";
        div23.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div23.style.background = "rgb(32, 27, 27)";
    div23.style.borderTopRightRadius = "3px";
    div23.style.borderBottomRightRadius = "3px";
    div23.style.borderBottomLeftRadius = "3px";
    div23.style.borderTopLeftRadius = "3px";
});

//====

let div24 = document.createElement('div');
div24.className = "tilda";
section2.append(div24);

let p47 = document.createElement('p');
p47.className = "textBut1";
div24.append(p47);
p47.innerHTML = "";

let p48 = document.createElement('p');
p48.className = "textButBackspace";
div24.append(p48);
p48.innerHTML = "O";

div24.addEventListener("click", () => {
    textarea.innerHTML += "o";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyO") {
        textarea.innerHTML += "o";
        div24.style.background = "blue";
        div24.style.borderTopRightRadius = "10px";
        div24.style.borderBottomRightRadius = "10px";
        div24.style.borderBottomLeftRadius = "10px";
        div24.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div24.style.background = "rgb(32, 27, 27)";
    div24.style.borderTopRightRadius = "3px";
    div24.style.borderBottomRightRadius = "3px";
    div24.style.borderBottomLeftRadius = "3px";
    div24.style.borderTopLeftRadius = "3px";
});

//====

let div25 = document.createElement('div');
div25.className = "tilda";
section2.append(div25);

let p49 = document.createElement('p');
p49.className = "textBut1";
div25.append(p49);
p49.innerHTML = "";

let p50 = document.createElement('p');
p50.className = "textButBackspace";
div25.append(p50);
p50.innerHTML = "P";

div25.addEventListener("click", () => {
    textarea.innerHTML += "p";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyP") {
        textarea.innerHTML += "p";
        div25.style.background = "blue";
        div25.style.borderTopRightRadius = "10px";
        div25.style.borderBottomRightRadius = "10px";
        div25.style.borderBottomLeftRadius = "10px";
        div25.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div25.style.background = "rgb(32, 27, 27)";
    div25.style.borderTopRightRadius = "3px";
    div25.style.borderBottomRightRadius = "3px";
    div25.style.borderBottomLeftRadius = "3px";
    div25.style.borderTopLeftRadius = "3px";
});

//====

let div26 = document.createElement('div');
div26.className = "tilda";
section2.append(div26);

let p51 = document.createElement('p');
p51.className = "textBut1";
div26.append(p51);
p51.innerHTML = "";

let p52 = document.createElement('p');
p52.className = "textButBackspace";
div26.append(p52);
p52.innerHTML = "[";

div26.addEventListener("click", () => {
    textarea.innerHTML += "[";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "BracketLeft") {
        textarea.innerHTML += "[";
        div26.style.background = "blue";
        div26.style.borderTopRightRadius = "10px";
        div26.style.borderBottomRightRadius = "10px";
        div26.style.borderBottomLeftRadius = "10px";
        div26.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div26.style.background = "rgb(32, 27, 27)";
    div26.style.borderTopRightRadius = "3px";
    div26.style.borderBottomRightRadius = "3px";
    div26.style.borderBottomLeftRadius = "3px";
    div26.style.borderTopLeftRadius = "3px";
});

//====

let div27 = document.createElement('div');
div27.className = "tilda";
section2.append(div27);

let p53 = document.createElement('p');
p53.className = "textBut1";
div27.append(p53);
p53.innerHTML = "";

let p54 = document.createElement('p');
p54.className = "textButBackspace";
div27.append(p54);
p54.innerHTML = "]";

div27.addEventListener("click", () => {
    textarea.innerHTML += "]";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "BracketRight") {
        textarea.innerHTML += "]";
        div27.style.background = "blue";
        div27.style.borderTopRightRadius = "10px";
        div27.style.borderBottomRightRadius = "10px";
        div27.style.borderBottomLeftRadius = "10px";
        div27.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div27.style.background = "rgb(32, 27, 27)";
    div27.style.borderTopRightRadius = "3px";
    div27.style.borderBottomRightRadius = "3px";
    div27.style.borderBottomLeftRadius = "3px";
    div27.style.borderTopLeftRadius = "3px";
});

//====

let div28 = document.createElement('div');
div28.className = "tilda";
section2.append(div28);

let p55 = document.createElement('p');
p55.className = "textBut1";
div28.append(p55);
p55.innerHTML = "/";

let p56 = document.createElement('p');
p56.className = "textBut2";
div28.append(p56);
p56.innerHTML = "\\";

div28.addEventListener("click", () => {
    textarea.innerHTML += "\\";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Backslash") {
        textarea.innerHTML += "\\";
        div28.style.background = "blue";
        div28.style.borderTopRightRadius = "10px";
        div28.style.borderBottomRightRadius = "10px";
        div28.style.borderBottomLeftRadius = "10px";
        div28.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div28.style.background = "rgb(32, 27, 27)";
    div28.style.borderTopRightRadius = "3px";
    div28.style.borderBottomRightRadius = "3px";
    div28.style.borderBottomLeftRadius = "3px";
    div28.style.borderTopLeftRadius = "3px";
});

//====

let div29 = document.createElement('div');
div29.className = "del";
section2.append(div29);

let p57 = document.createElement('p');
p57.className = "textBut1";
div29.append(p57);
p57.innerHTML = "";

let p58 = document.createElement('p');
p58.className = "textButBackspace";
div29.append(p58);
p58.innerHTML = "Del";

//не могу реализовать, только удаленіе целіком

div29.addEventListener("click", () => {
    // console.log( textarea.value.selectionStart ) ;
    textarea.innerHTML += "";
});

textarea.onfocus = () => {
    console.log(textarea.value.length);
};

/*
textarea.onmousemove = function(event) {
    event = event || window.event; // кроссбраузерность
    console.log( event.offsetX ) ;
   // textarea.innerHTML = event.offsetY;
}
*/

document.addEventListener('keydown', function (event) {
    if (event.code == "Delete") {
        textarea.innerHTML = "";
        div29.style.background = "blue";
        div29.style.borderTopRightRadius = "10px";
        div29.style.borderBottomRightRadius = "10px";
        div29.style.borderBottomLeftRadius = "10px";
        div29.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div29.style.background = "black";
    div29.style.borderTopRightRadius = "3px";
    div29.style.borderBottomRightRadius = "3px";
    div29.style.borderBottomLeftRadius = "3px";
    div29.style.borderTopLeftRadius = "3px";
});

// document.addEventListener('keydown', function(event) {
//     if (event.code == "KeyDel" ) {
//         textarea.innerHTML +=  " ";

//     } ;
// });

/*=========*/

let section3 = document.createElement('div');
section3.className = "section3";
section.append(section3);


let div30 = document.createElement('div');
div30.className = "capslk";
section3.append(div30);

let p59 = document.createElement('p');
p59.className = "textBut1";
div30.append(p59);
p59.innerHTML = "";

let p60 = document.createElement('p');
p60.className = "textButBackspace";
div30.append(p60);
p60.innerHTML = "CapsLk";

//кнопка не реализована

div30.addEventListener("click", () => {
    textarea.innerHTML += " ";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "CapsLock") {
        div30.style.background = "blue";
        div30.style.borderTopRightRadius = "10px";
        div30.style.borderBottomRightRadius = "10px";
        div30.style.borderBottomLeftRadius = "10px";
        div30.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div30.style.background = "black";
    div30.style.borderTopRightRadius = "3px";
    div30.style.borderBottomRightRadius = "3px";
    div30.style.borderBottomLeftRadius = "3px";
    div30.style.borderTopLeftRadius = "3px";
});

//====


let div31 = document.createElement('div');
div31.className = "tilda";
section3.append(div31);

let p61 = document.createElement('p');
p61.className = "textBut1";
div31.append(p61);
p61.innerHTML = "";

let p62 = document.createElement('p');
p62.className = "textButBackspace";
div31.append(p62);
p62.innerHTML = "A";

div31.addEventListener("click", () => {
    textarea.innerHTML += "a";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyA") {
        textarea.innerHTML += "a";
        div31.style.background = "blue";
        div31.style.borderTopRightRadius = "10px";
        div31.style.borderBottomRightRadius = "10px";
        div31.style.borderBottomLeftRadius = "10px";
        div31.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div31.style.background = "rgb(32, 27, 27)";
    div31.style.borderTopRightRadius = "3px";
    div31.style.borderBottomRightRadius = "3px";
    div31.style.borderBottomLeftRadius = "3px";
    div31.style.borderTopLeftRadius = "3px";
});

//====

let div32 = document.createElement('div');
div32.className = "tilda";
section3.append(div32);

let p63 = document.createElement('p');
p63.className = "textBut1";
div32.append(p63);
p63.innerHTML = "";

let p64 = document.createElement('p');
p64.className = "textButBackspace";
div32.append(p64);
p64.innerHTML = "S";

div32.addEventListener("click", () => {
    textarea.innerHTML += "s";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyS") {
        textarea.innerHTML += "s";
        div32.style.background = "blue";
        div32.style.borderTopRightRadius = "10px";
        div32.style.borderBottomRightRadius = "10px";
        div32.style.borderBottomLeftRadius = "10px";
        div32.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div32.style.background = "rgb(32, 27, 27)";
    div32.style.borderTopRightRadius = "3px";
    div32.style.borderBottomRightRadius = "3px";
    div32.style.borderBottomLeftRadius = "3px";
    div32.style.borderTopLeftRadius = "3px";
});

//====

let div33 = document.createElement('div');
div33.className = "tilda";
section3.append(div33);

let p65 = document.createElement('p');
p65.className = "textBut1";
div33.append(p65);
p65.innerHTML = "";

let p66 = document.createElement('p');
p66.className = "textButBackspace";
div33.append(p66);
p66.innerHTML = "D";

div33.addEventListener("click", () => {
    textarea.innerHTML += "d";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyD") {
        textarea.innerHTML += "d";
        div33.style.background = "blue";
        div33.style.borderTopRightRadius = "10px";
        div33.style.borderBottomRightRadius = "10px";
        div33.style.borderBottomLeftRadius = "10px";
        div33.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div33.style.background = "rgb(32, 27, 27)";
    div33.style.borderTopRightRadius = "3px";
    div33.style.borderBottomRightRadius = "3px";
    div33.style.borderBottomLeftRadius = "3px";
    div33.style.borderTopLeftRadius = "3px";
});

//====

let div34 = document.createElement('div');
div34.className = "tilda";
section3.append(div34);

let p67 = document.createElement('p');
p67.className = "textBut1";
div34.append(p67);
p67.innerHTML = "";

let p68 = document.createElement('p');
p68.className = "textButBackspace";
div34.append(p68);
p68.innerHTML = "F";

div34.addEventListener("click", () => {
    textarea.innerHTML += "f";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyF") {
        textarea.innerHTML += "f";
        div34.style.background = "blue";
        div34.style.borderTopRightRadius = "10px";
        div34.style.borderBottomRightRadius = "10px";
        div34.style.borderBottomLeftRadius = "10px";
        div34.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div34.style.background = "rgb(32, 27, 27)";
    div34.style.borderTopRightRadius = "3px";
    div34.style.borderBottomRightRadius = "3px";
    div34.style.borderBottomLeftRadius = "3px";
    div34.style.borderTopLeftRadius = "3px";
});

//====

let div35 = document.createElement('div');
div35.className = "tilda";
section3.append(div35);

let p69 = document.createElement('p');
p69.className = "textBut1";
div35.append(p69);
p69.innerHTML = "";

let p70 = document.createElement('p');
p70.className = "textButBackspace";
div35.append(p70);
p70.innerHTML = "G";

div35.addEventListener("click", () => {
    textarea.innerHTML += "g";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyG") {
        textarea.innerHTML += "g";
        div35.style.background = "blue";
        div35.style.borderTopRightRadius = "10px";
        div35.style.borderBottomRightRadius = "10px";
        div35.style.borderBottomLeftRadius = "10px";
        div35.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div35.style.background = "rgb(32, 27, 27)";
    div35.style.borderTopRightRadius = "3px";
    div35.style.borderBottomRightRadius = "3px";
    div35.style.borderBottomLeftRadius = "3px";
    div35.style.borderTopLeftRadius = "3px";
});

//====

let div36 = document.createElement('div');
div36.className = "tilda";
section3.append(div36);

let p71 = document.createElement('p');
p71.className = "textBut1";
div36.append(p71);
p71.innerHTML = "";

let p72 = document.createElement('p');
p72.className = "textButBackspace";
div36.append(p72);
p72.innerHTML = "H";

div36.addEventListener("click", () => {
    textarea.innerHTML += "h";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyH") {
        textarea.innerHTML += "h";
        div36.style.background = "blue";
        div36.style.borderTopRightRadius = "10px";
        div36.style.borderBottomRightRadius = "10px";
        div36.style.borderBottomLeftRadius = "10px";
        div36.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div36.style.background = "rgb(32, 27, 27)";
    div36.style.borderTopRightRadius = "3px";
    div36.style.borderBottomRightRadius = "3px";
    div36.style.borderBottomLeftRadius = "3px";
    div36.style.borderTopLeftRadius = "3px";
});

//====

let div37 = document.createElement('div');
div37.className = "tilda";
section3.append(div37);

let p73 = document.createElement('p');
p73.className = "textBut1";
div37.append(p73);
p73.innerHTML = "";

let p74 = document.createElement('p');
p74.className = "textButBackspace";
div37.append(p74);
p74.innerHTML = "J";

div37.addEventListener("click", () => {
    textarea.innerHTML += "j";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyJ") {
        textarea.innerHTML += "j";
        div37.style.background = "blue";
        div37.style.borderTopRightRadius = "10px";
        div37.style.borderBottomRightRadius = "10px";
        div37.style.borderBottomLeftRadius = "10px";
        div37.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div37.style.background = "rgb(32, 27, 27)";
    div37.style.borderTopRightRadius = "3px";
    div37.style.borderBottomRightRadius = "3px";
    div37.style.borderBottomLeftRadius = "3px";
    div37.style.borderTopLeftRadius = "3px";
});

//====

let div38 = document.createElement('div');
div38.className = "tilda";
section3.append(div38);

let p75 = document.createElement('p');
p75.className = "textBut1";
div38.append(p75);
p75.innerHTML = "";

let p76 = document.createElement('p');
p76.className = "textButBackspace";
div38.append(p76);
p76.innerHTML = "K";

div38.addEventListener("click", () => {
    textarea.innerHTML += "k";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyK") {
        textarea.innerHTML += "k";
        div38.style.background = "blue";
        div38.style.borderTopRightRadius = "10px";
        div38.style.borderBottomRightRadius = "10px";
        div38.style.borderBottomLeftRadius = "10px";
        div38.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div38.style.background = "rgb(32, 27, 27)";
    div38.style.borderTopRightRadius = "3px";
    div38.style.borderBottomRightRadius = "3px";
    div38.style.borderBottomLeftRadius = "3px";
    div38.style.borderTopLeftRadius = "3px";
});

//====

let div39 = document.createElement('div');
div39.className = "tilda";
section3.append(div39);

let p77 = document.createElement('p');
p77.className = "textBut1";
div39.append(p77);
p77.innerHTML = "";

let p78 = document.createElement('p');
p78.className = "textButBackspace";
div39.append(p78);
p78.innerHTML = "L";

div39.addEventListener("click", () => {
    textarea.innerHTML += "l";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyL") {
        textarea.innerHTML += "l";
        div39.style.background = "blue";
        div39.style.borderTopRightRadius = "10px";
        div39.style.borderBottomRightRadius = "10px";
        div39.style.borderBottomLeftRadius = "10px";
        div39.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div39.style.background = "rgb(32, 27, 27)";
    div39.style.borderTopRightRadius = "3px";
    div39.style.borderBottomRightRadius = "3px";
    div39.style.borderBottomLeftRadius = "3px";
    div39.style.borderTopLeftRadius = "3px";
});

//====

let div40 = document.createElement('div');
div40.className = "tilda";
section3.append(div40);

let p79 = document.createElement('p');
p79.className = "textBut1";
div40.append(p79);
p79.innerHTML = "";

let p80 = document.createElement('p');
p80.className = "textButBackspace";
div40.append(p80);
p80.innerHTML = ";";

div40.addEventListener("click", () => {
    textarea.innerHTML += ";";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Semicolon") {
        textarea.innerHTML += ";";
        div40.style.background = "blue";
        div40.style.borderTopRightRadius = "10px";
        div40.style.borderBottomRightRadius = "10px";
        div40.style.borderBottomLeftRadius = "10px";
        div40.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div40.style.background = "rgb(32, 27, 27)";
    div40.style.borderTopRightRadius = "3px";
    div40.style.borderBottomRightRadius = "3px";
    div40.style.borderBottomLeftRadius = "3px";
    div40.style.borderTopLeftRadius = "3px";
});

//====

let div41 = document.createElement('div');
div41.className = "tilda";
section3.append(div41);

let p81 = document.createElement('p');
p81.className = "textBut1";
div41.append(p81);
p81.innerHTML = "";

let p82 = document.createElement('p');
p82.className = "textButBackspace";
div41.append(p82);
p82.innerHTML = "'";

div41.addEventListener("click", () => {
    textarea.innerHTML += "'";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Quote") {
        textarea.innerHTML += "'";
        div41.style.background = "blue";
        div41.style.borderTopRightRadius = "10px";
        div41.style.borderBottomRightRadius = "10px";
        div41.style.borderBottomLeftRadius = "10px";
        div41.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div41.style.background = "rgb(32, 27, 27)";
    div41.style.borderTopRightRadius = "3px";
    div41.style.borderBottomRightRadius = "3px";
    div41.style.borderBottomLeftRadius = "3px";
    div41.style.borderTopLeftRadius = "3px";
});

//====

let div42 = document.createElement('div');
div42.className = "enter";
section3.append(div42);

let p83 = document.createElement('p');
p83.className = "textBut1";
div42.append(p83);
p83.innerHTML = "";

let p84 = document.createElement('p');
p84.className = "textButBackspace";
div42.append(p84);
p84.innerHTML = "ENTER";

//не смог реалізовать

div42.addEventListener("click", () => {
    textarea.innerHTML += " ";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Enter") {
        textarea.innerHTML += " ";
        div42.style.background = "blue";
        div42.style.borderTopRightRadius = "10px";
        div42.style.borderBottomRightRadius = "10px";
        div42.style.borderBottomLeftRadius = "10px";
        div42.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div42.style.background = "black";
    div42.style.borderTopRightRadius = "3px";
    div42.style.borderBottomRightRadius = "3px";
    div42.style.borderBottomLeftRadius = "3px";
    div42.style.borderTopLeftRadius = "3px";
});


/*========================*/

let section4 = document.createElement('div');
section4.className = "section4";
section.append(section4);


let div43 = document.createElement('div');
div43.className = "shift";
section4.append(div43);

let p85 = document.createElement('p');
p85.className = "textBut1";
div43.append(p85);
p85.innerHTML = "";

let p86 = document.createElement('p');
p86.className = "textButBackspace";
div43.append(p86);
p86.innerHTML = "Shift";

div43.addEventListener("click", () => {
    // textarea.innerHTML +=  "/";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "ShiftLeft") {
        //    textarea.innerHTML +=  "/";
        div43.style.background = "blue";
        div43.style.borderTopRightRadius = "10px";
        div43.style.borderBottomRightRadius = "10px";
        div43.style.borderBottomLeftRadius = "10px";
        div43.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div43.style.background = "black";
    div43.style.borderTopRightRadius = "3px";
    div43.style.borderBottomRightRadius = "3px";
    div43.style.borderBottomLeftRadius = "3px";
    div43.style.borderTopLeftRadius = "3px";
});

//====

let div44 = document.createElement('div');
div44.className = "tilda";
section4.append(div44);

let p87 = document.createElement('p');
p87.className = "textBut1";
div44.append(p87);
p87.innerHTML = "";

let p88 = document.createElement('p');
p88.className = "textButBackspace";
div44.append(p88);
p88.innerHTML = "\\";

div44.addEventListener("click", () => {
    textarea.innerHTML += "\\";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Backslash") {
        textarea.innerHTML += "\\";
        div44.style.background = "blue";
        div44.style.borderTopRightRadius = "10px";
        div44.style.borderBottomRightRadius = "10px";
        div44.style.borderBottomLeftRadius = "10px";
        div44.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div44.style.background = "rgb(32, 27, 27)";
    div44.style.borderTopRightRadius = "3px";
    div44.style.borderBottomRightRadius = "3px";
    div44.style.borderBottomLeftRadius = "3px";
    div44.style.borderTopLeftRadius = "3px";
});

//====

let div45 = document.createElement('div');
div45.className = "tilda";
section4.append(div45);

let p89 = document.createElement('p');
p89.className = "textBut1";
div45.append(p89);
p89.innerHTML = "";

let p90 = document.createElement('p');
p90.className = "textButBackspace";
div45.append(p90);
p90.innerHTML = "Z";

div45.addEventListener("click", () => {
    textarea.innerHTML += "z";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyZ") {
        textarea.innerHTML += "z";
        div45.style.background = "blue";
        div45.style.borderTopRightRadius = "10px";
        div45.style.borderBottomRightRadius = "10px";
        div45.style.borderBottomLeftRadius = "10px";
        div45.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div45.style.background = "rgb(32, 27, 27)";
    div45.style.borderTopRightRadius = "3px";
    div45.style.borderBottomRightRadius = "3px";
    div45.style.borderBottomLeftRadius = "3px";
    div45.style.borderTopLeftRadius = "3px";
});

//====


let div46 = document.createElement('div');
div46.className = "tilda";
section4.append(div46);

let p91 = document.createElement('p');
p91.className = "textBut1";
div46.append(p91);
p91.innerHTML = "";

let p92 = document.createElement('p');
p92.className = "textButBackspace";
div46.append(p92);
p92.innerHTML = "X";

div46.addEventListener("click", () => {
    textarea.innerHTML += "x";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyX") {
        textarea.innerHTML += "x";
        div46.style.background = "blue";
        div46.style.borderTopRightRadius = "10px";
        div46.style.borderBottomRightRadius = "10px";
        div46.style.borderBottomLeftRadius = "10px";
        div46.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div46.style.background = "rgb(32, 27, 27)";
    div46.style.borderTopRightRadius = "3px";
    div46.style.borderBottomRightRadius = "3px";
    div46.style.borderBottomLeftRadius = "3px";
    div46.style.borderTopLeftRadius = "3px";
});

//====

let div47 = document.createElement('div');
div47.className = "tilda";
section4.append(div47);

let p93 = document.createElement('p');
p93.className = "textBut1";
div47.append(p93);
p93.innerHTML = "";

let p94 = document.createElement('p');
p94.className = "textButBackspace";
div47.append(p94);
p94.innerHTML = "C";

div47.addEventListener("click", () => {
    textarea.innerHTML += "c";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyC") {
        textarea.innerHTML += "c";
        div47.style.background = "blue";
        div47.style.borderTopRightRadius = "10px";
        div47.style.borderBottomRightRadius = "10px";
        div47.style.borderBottomLeftRadius = "10px";
        div47.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div47.style.background = "rgb(32, 27, 27)";
    div47.style.borderTopRightRadius = "3px";
    div47.style.borderBottomRightRadius = "3px";
    div47.style.borderBottomLeftRadius = "3px";
    div47.style.borderTopLeftRadius = "3px";
});

//====

let div48 = document.createElement('div');
div48.className = "tilda";
section4.append(div48);

let p95 = document.createElement('p');
p95.className = "textBut1";
div48.append(p95);
p95.innerHTML = "";

let p96 = document.createElement('p');
p96.className = "textButBackspace";
div48.append(p96);
p96.innerHTML = "V";

div48.addEventListener("click", () => {
    textarea.innerHTML += "v";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyV") {
        textarea.innerHTML += "v";
        div48.style.background = "blue";
        div48.style.borderTopRightRadius = "10px";
        div48.style.borderBottomRightRadius = "10px";
        div48.style.borderBottomLeftRadius = "10px";
        div48.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div48.style.background = "rgb(32, 27, 27)";
    div48.style.borderTopRightRadius = "3px";
    div48.style.borderBottomRightRadius = "3px";
    div48.style.borderBottomLeftRadius = "3px";
    div48.style.borderTopLeftRadius = "3px";
});

//====

let div49 = document.createElement('div');
div49.className = "tilda";
section4.append(div49);

let p97 = document.createElement('p');
p97.className = "textBut1";
div49.append(p97);
p97.innerHTML = "";

let p98 = document.createElement('p');
p98.className = "textButBackspace";
div49.append(p98);
p98.innerHTML = "B";

div49.addEventListener("click", () => {
    textarea.innerHTML += "b";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyB") {
        textarea.innerHTML += "b";
        div49.style.background = "blue";
        div49.style.borderTopRightRadius = "10px";
        div49.style.borderBottomRightRadius = "10px";
        div49.style.borderBottomLeftRadius = "10px";
        div49.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div49.style.background = "rgb(32, 27, 27)";
    div49.style.borderTopRightRadius = "3px";
    div49.style.borderBottomRightRadius = "3px";
    div49.style.borderBottomLeftRadius = "3px";
    div49.style.borderTopLeftRadius = "3px";
});

//====

let div50 = document.createElement('div');
div50.className = "tilda";
section4.append(div50);

let p99 = document.createElement('p');
p99.className = "textBut1";
div50.append(p99);
p99.innerHTML = "";

let p100 = document.createElement('p');
p100.className = "textButBackspace";
div50.append(p100);
p100.innerHTML = "N";

div50.addEventListener("click", () => {
    textarea.innerHTML += "n";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyN") {
        textarea.innerHTML += "n";
        div50.style.background = "blue";
        div50.style.borderTopRightRadius = "10px";
        div50.style.borderBottomRightRadius = "10px";
        div50.style.borderBottomLeftRadius = "10px";
        div50.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div50.style.background = "rgb(32, 27, 27)";
    div50.style.borderTopRightRadius = "3px";
    div50.style.borderBottomRightRadius = "3px";
    div50.style.borderBottomLeftRadius = "3px";
    div50.style.borderTopLeftRadius = "3px";
});

//====

let div51 = document.createElement('div');
div51.className = "tilda";
section4.append(div51);

let p101 = document.createElement('p');
p101.className = "textBut1";
div51.append(p101);
p101.innerHTML = "";

let p102 = document.createElement('p');
p102.className = "textButBackspace";
div51.append(p102);
p102.innerHTML = "M";

div51.addEventListener("click", () => {
    textarea.innerHTML += "m";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "KeyM") {
        textarea.innerHTML += "m";
        div51.style.background = "blue";
        div51.style.borderTopRightRadius = "10px";
        div51.style.borderBottomRightRadius = "10px";
        div51.style.borderBottomLeftRadius = "10px";
        div51.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div51.style.background = "rgb(32, 27, 27)";
    div51.style.borderTopRightRadius = "3px";
    div51.style.borderBottomRightRadius = "3px";
    div51.style.borderBottomLeftRadius = "3px";
    div51.style.borderTopLeftRadius = "3px";
});

//====

let div52 = document.createElement('div');
div52.className = "tilda";
section4.append(div52);

let p103 = document.createElement('p');
p103.className = "textBut1";
div52.append(p103);
p103.innerHTML = "";

let p104 = document.createElement('p');
p104.className = "textButBackspace";
div52.append(p104);
p104.innerHTML = ",";

div52.addEventListener("click", () => {
    textarea.innerHTML += ",";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Comma") {
        textarea.innerHTML += ",";
        div52.style.background = "blue";
        div52.style.borderTopRightRadius = "10px";
        div52.style.borderBottomRightRadius = "10px";
        div52.style.borderBottomLeftRadius = "10px";
        div52.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div52.style.background = "rgb(32, 27, 27)";
    div52.style.borderTopRightRadius = "3px";
    div52.style.borderBottomRightRadius = "3px";
    div52.style.borderBottomLeftRadius = "3px";
    div52.style.borderTopLeftRadius = "3px";
});

//====

let div53 = document.createElement('div');
div53.className = "tilda";
section4.append(div53);

let p105 = document.createElement('p');
p105.className = "textBut1";
div53.append(p105);
p105.innerHTML = "";

let p106 = document.createElement('p');
p106.className = "textButBackspace";
div53.append(p106);
p106.innerHTML = ".";

div53.addEventListener("click", () => {
    textarea.innerHTML += ".";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Period") {
        textarea.innerHTML += ".";
        div53.style.background = "blue";
        div53.style.borderTopRightRadius = "10px";
        div53.style.borderBottomRightRadius = "10px";
        div53.style.borderBottomLeftRadius = "10px";
        div53.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div53.style.background = "rgb(32, 27, 27)";
    div53.style.borderTopRightRadius = "3px";
    div53.style.borderBottomRightRadius = "3px";
    div53.style.borderBottomLeftRadius = "3px";
    div53.style.borderTopLeftRadius = "3px";
});

//====

let div531 = document.createElement('div');
div531.className = "tilda";
section4.append(div531);

let p107 = document.createElement('p');
p107.className = "textBut1";
div531.append(p107);
p107.innerHTML = "";

let p108 = document.createElement('p');
p108.className = "textButBackspace";
div531.append(p108);
p108.innerHTML = "/";

div531.addEventListener("click", () => {
    textarea.innerHTML += "/";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Slash") {
        textarea.innerHTML += "/";
        div531.style.background = "blue";
        div531.style.borderTopRightRadius = "10px";
        div531.style.borderBottomRightRadius = "10px";
        div531.style.borderBottomLeftRadius = "10px";
        div531.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div531.style.background = "rgb(32, 27, 27)";
    div531.style.borderTopRightRadius = "3px";
    div531.style.borderBottomRightRadius = "3px";
    div531.style.borderBottomLeftRadius = "3px";
    div531.style.borderTopLeftRadius = "3px";
});

// =======

let div54 = document.createElement('div');
div54.className = "artop";
section4.append(div54);

let p109 = document.createElement('p');
p109.className = "textBut1";
div54.append(p109);
p109.innerHTML = "";

let p110 = document.createElement('p');
p110.className = "textButBackspace";
div54.append(p110);
p110.innerHTML = "▲";

div54.addEventListener("click", () => {
    // textarea.innerHTML +=  "/";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowUp") {
        //    textarea.innerHTML +=  "/";
        div54.style.background = "blue";
        div54.style.borderTopRightRadius = "10px";
        div54.style.borderBottomRightRadius = "10px";
        div54.style.borderBottomLeftRadius = "10px";
        div54.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div54.style.background = "black";
    div54.style.borderTopRightRadius = "3px";
    div54.style.borderBottomRightRadius = "3px";
    div54.style.borderBottomLeftRadius = "3px";
    div54.style.borderTopLeftRadius = "3px";
});

// ======

let div55 = document.createElement('div');
div55.className = "shift";
section4.append(div55);

let p111 = document.createElement('p');
p111.className = "textBut1";
div55.append(p111);
p111.innerHTML = "";

let p112 = document.createElement('p');
p112.className = "textButBackspace";
div55.append(p112);
p112.innerHTML = "Shift";

div55.addEventListener("click", () => {
    // textarea.innerHTML +=  "/";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "ShiftRight") {
        //    textarea.innerHTML +=  "/";
        div55.style.background = "blue";
        div55.style.borderTopRightRadius = "10px";
        div55.style.borderBottomRightRadius = "10px";
        div55.style.borderBottomLeftRadius = "10px";
        div55.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div55.style.background = "black";
    div55.style.borderTopRightRadius = "3px";
    div55.style.borderBottomRightRadius = "3px";
    div55.style.borderBottomLeftRadius = "3px";
    div55.style.borderTopLeftRadius = "3px";
});

/*=============*/

let section5 = document.createElement('div');
section5.className = "section5";
section.append(section5);


let div56 = document.createElement('div');
div56.className = "ctrl";
section5.append(div56);

let p113 = document.createElement('p');
p113.className = "textBut1";
div56.append(p113);
p113.innerHTML = "";

let p114 = document.createElement('p');
p114.className = "textButBackspace";
div56.append(p114);
p114.innerHTML = "Ctrl";

div56.addEventListener("click", () => {
    // textarea.innerHTML +=  "/";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "ControlLeft") {
        //    textarea.innerHTML +=  "/";
        div56.style.background = "blue";
        div56.style.borderTopRightRadius = "10px";
        div56.style.borderBottomRightRadius = "10px";
        div56.style.borderBottomLeftRadius = "10px";
        div56.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div56.style.background = "black";
    div56.style.borderTopRightRadius = "3px";
    div56.style.borderBottomRightRadius = "3px";
    div56.style.borderBottomLeftRadius = "3px";
    div56.style.borderTopLeftRadius = "3px";
});

//====

//не реализован

let div57 = document.createElement('div');
div57.className = "win";
section5.append(div57);

let p115 = document.createElement('p');
p115.className = "textBut1";
div57.append(p115);
p115.innerHTML = "";

let p116 = document.createElement('p');
p116.className = "textButBackspace";
div57.append(p116);
p116.innerHTML = "Win";

div57.addEventListener("click", () => {
    // textarea.innerHTML +=  "/";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "MetaLeft") {
        //    textarea.innerHTML +=  "/";
        div57.style.background = "blue";
        div57.style.borderTopRightRadius = "10px";
        div57.style.borderBottomRightRadius = "10px";
        div57.style.borderBottomLeftRadius = "10px";
        div57.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div57.style.background = "black";
    div57.style.borderTopRightRadius = "3px";
    div57.style.borderBottomRightRadius = "3px";
    div57.style.borderBottomLeftRadius = "3px";
    div57.style.borderTopLeftRadius = "3px";
});

//====

let div58 = document.createElement('div');
div58.className = "alt";
section5.append(div58);

let p117 = document.createElement('p');
p117.className = "textBut1";
div58.append(p117);
p117.innerHTML = "";

let p118 = document.createElement('p');
p118.className = "textButBackspace";
div58.append(p118);
p118.innerHTML = "Alt";

div58.addEventListener("click", () => {
    // textarea.innerHTML +=  "/";
});

document.addEventListener("keydown", function (event) {
    if (event.code == "AltLeft") {
        //    textarea.innerHTML +=  "/";
        div58.style.background = "blue";
        div58.style.borderTopRightRadius = "10px";
        div58.style.borderBottomRightRadius = "10px";
        div58.style.borderBottomLeftRadius = "10px";
        div58.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div58.style.background = "black";
    div58.style.borderTopRightRadius = "3px";
    div58.style.borderBottomRightRadius = "3px";
    div58.style.borderBottomLeftRadius = "3px";
    div58.style.borderTopLeftRadius = "3px";
});

//====

let div59 = document.createElement('div');
div59.className = "prob";
section5.append(div59);

div59.addEventListener("click", () => {
    textarea.innerHTML += " ";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "Space") {
        textarea.innerHTML += " ";
        div59.style.background = "blue";
        div59.style.borderTopRightRadius = "10px";
        div59.style.borderBottomRightRadius = "10px";
        div59.style.borderBottomLeftRadius = "10px";
        div59.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div59.style.background = "rgb(32, 27, 27)";
    div59.style.borderTopRightRadius = "3px";
    div59.style.borderBottomRightRadius = "3px";
    div59.style.borderBottomLeftRadius = "3px";
    div59.style.borderTopLeftRadius = "3px";
});

// document.addEventListener('keydown', function(event) {
//     if (event.code == "Space" ) {
//         textarea.innerHTML +=  " ";

//     } ;
// });

//====


let div60 = document.createElement('div');
div60.className = "alt";
section5.append(div60);

let p119 = document.createElement('p');
p119.className = "textBut1";
div60.append(p119);
p119.innerHTML = "";

let p120 = document.createElement('p');
p120.className = "textButBackspace";
div60.append(p120);
p120.innerHTML = "Alt";

div60.addEventListener("click", () => {
    //  textarea.innerHTML +=  " ";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "AltRight") {
        //    textarea.innerHTML +=  "/";
        div60.style.background = "blue";
        div60.style.borderTopRightRadius = "10px";
        div60.style.borderBottomRightRadius = "10px";
        div60.style.borderBottomLeftRadius = "10px";
        div60.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div60.style.background = "black";
    div60.style.borderTopRightRadius = "3px";
    div60.style.borderBottomRightRadius = "3px";
    div60.style.borderBottomLeftRadius = "3px";
    div60.style.borderTopLeftRadius = "3px";
});

// =====

let div64 = document.createElement('div');
div64.className = "ctrl";
section5.append(div64);

let p121 = document.createElement('p');
p121.className = "textBut1";
div64.append(p121);
p121.innerHTML = "";

let p122 = document.createElement('p');
p122.className = "textButBackspace";
div64.append(p122);
p122.innerHTML = "Ctrl";

div64.addEventListener("click", () => {
    //  textarea.innerHTML +=  " ";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "ControlLeft") {
        //    textarea.innerHTML +=  "/";
        div64.style.background = "blue";
        div64.style.borderTopRightRadius = "10px";
        div64.style.borderBottomRightRadius = "10px";
        div64.style.borderBottomLeftRadius = "10px";
        div64.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div64.style.background = "black";
    div64.style.borderTopRightRadius = "3px";
    div64.style.borderBottomRightRadius = "3px";
    div64.style.borderBottomLeftRadius = "3px";
    div64.style.borderTopLeftRadius = "3px";
});

// =====

let div61 = document.createElement('div');
div61.className = "arleft";
section5.append(div61);

let p123 = document.createElement('p');
p123.className = "textBut1";
div61.append(p123);
p123.innerHTML = "";

let p124 = document.createElement('p');
p124.className = "textButBackspace";
div61.append(p124);
p124.innerHTML = "&#9668";

//стрелки не смог реализовать

div61.addEventListener("click", () => {
    //    textarea.innerHTML +=  " ";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowLeft") {
        //textarea.innerHTML +=  " ";
        div61.style.background = "blue";
        div61.style.borderTopRightRadius = "10px";
        div61.style.borderBottomRightRadius = "10px";
        div61.style.borderBottomLeftRadius = "10px";
        div61.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div61.style.background = "black";
    div61.style.borderTopRightRadius = "3px";
    div61.style.borderBottomRightRadius = "3px";
    div61.style.borderBottomLeftRadius = "3px";
    div61.style.borderTopLeftRadius = "3px";
});

// =====

let div62 = document.createElement('div');
div62.className = "arbot";
section5.append(div62);

let p125 = document.createElement('p');
p125.className = "textBut1";
div62.append(p125);
p125.innerHTML = "";

let p126 = document.createElement('p');
p126.className = "textButBackspace";
div62.append(p126);
p126.innerHTML = "▼";

div62.addEventListener("click", () => {
    //    textarea.innerHTML +=  " ";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowDown") {
        //textarea.innerHTML +=  " ";
        div62.style.background = "blue";
        div62.style.borderTopRightRadius = "10px";
        div62.style.borderBottomRightRadius = "10px";
        div62.style.borderBottomLeftRadius = "10px";
        div62.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div62.style.background = "black";
    div62.style.borderTopRightRadius = "3px";
    div62.style.borderBottomRightRadius = "3px";
    div62.style.borderBottomLeftRadius = "3px";
    div62.style.borderTopLeftRadius = "3px";
});

// =====

let div63 = document.createElement('div');
div63.className = "arright";
section5.append(div63);

let p127 = document.createElement('p');
p127.className = "textBut1";
div63.append(p127);
p127.innerHTML = "";

let p128 = document.createElement('p');
p128.className = "textButBackspace";
div63.append(p128);
p128.innerHTML = "&#9658";

div63.addEventListener("click", () => {
    //    textarea.innerHTML +=  " ";
});

document.addEventListener('keydown', function (event) {
    if (event.code == "ArrowRight") {
        //textarea.innerHTML +=  " ";
        div63.style.background = "blue";
        div63.style.borderTopRightRadius = "10px";
        div63.style.borderBottomRightRadius = "10px";
        div63.style.borderBottomLeftRadius = "10px";
        div63.style.borderTopLeftRadius = "10px";
    };
});

document.addEventListener('keyup', function (event) {
    div63.style.background = "black";
    div63.style.borderTopRightRadius = "3px";
    div63.style.borderBottomRightRadius = "3px";
    div63.style.borderBottomLeftRadius = "3px";
    div63.style.borderTopLeftRadius = "3px";
});

/*=========*/

let footer = document.createElement('footer');
footer.className = "footer";
div.append(footer);

let h2 = document.createElement('h2');
h2.className = "texth2";
footer.append(h2);
h2.innerHTML = "Клавиатура создана в операционной системе Windows";


