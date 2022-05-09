let div = document.createElement('div');
div.className = "wripper";
//textarea.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
document.body.append( div );


let main = document.createElement('main');
main.className = "main";
div.append( main );


let textarea = document.createElement('textarea');
textarea.className = "textarea";
main.append( textarea );


let section = document.createElement('section');
section.className = "keyboard";
main.append( section );

/*============*/

let section1 = document.createElement('div');
section1.className = "section1";
section.append( section1 );

let div1 = document.createElement('div');
div1.className = "tilda";
section1.append( div1 );

let p1 = document.createElement('p');
p1.className = "textBut1";
div1.append( p1 );
p1.innerHTML = "~" ;

let p2 = document.createElement('span');
p2.className = "textBut2";
div1.append( p2 );
p2.innerHTML = "`" ;

div1.addEventListener( "click" , () => { 
    textarea.innerHTML += "`" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == "Backquote" ) {
        textarea.innerHTML += "`" ;
      
    }
});

document.addEventListener('keydown', function(event) {
    if (event.code == "Backquote" && ( event.code == "ShiftLeft" || event.code == "ShiftRight" )) {
        textarea.innerHTML += "~" ;
      
    }
});

let div2 = document.createElement('div');
div2.className = "tilda";
section1.append( div2 );

let p3 = document.createElement('p');
p3.className = "textBut1";
div2.append( p3 );
p3.innerHTML = "!" ;

let p4 = document.createElement('p');
p4.className = "textBut2";
div2.append( p4 );
p4.innerHTML = "1" ;

p4.addEventListener( "click" , () => { 
    textarea.innerHTML += "1" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit1' ) {
        textarea.innerHTML += "1" ;
      //  p4.style.border-radius = "25px" ;
    }
});


let div3 = document.createElement('div');
div3.className = "tilda";
section1.append( div3 );

let p5 = document.createElement('p');
p5.className = "textBut1";
div3.append( p5 );
p5.innerHTML = "@" ;

let p6 = document.createElement('p');
p6.className = "textBut2";
div3.append( p6 );
p6.innerHTML = "2" ;

div3.addEventListener( "click" , () => { 
    textarea.innerHTML += "2" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit2' ) {
        textarea.innerHTML += "2" ;
      
    }
});

let div4 = document.createElement('div');
div4.className = "tilda";
section1.append( div4 );

let p7 = document.createElement('p');
p7.className = "textBut1";
div4.append( p7 );
p7.innerHTML = "#" ;

let p8 = document.createElement('p');
p8.className = "textBut2";
div4.append( p8 );
p8.innerHTML = "3" ;

div4.addEventListener( "click" , () => { 
    textarea.innerHTML += "3" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit3' ) {
        textarea.innerHTML += "3" ;
      
    }
});

let div5 = document.createElement('div');
div5.className = "tilda";
section1.append( div5 );

let p9 = document.createElement('p');
p9.className = "textBut1";
div5.append( p9 );
p9.innerHTML = "$" ;

let p10 = document.createElement('p');
p10.className = "textBut2";
div5.append( p10 );
p10.innerHTML = "4" ;

div5.addEventListener( "click" , () => { 
    textarea.innerHTML += "4" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit4' ) {
        textarea.innerHTML += "4" ;
      
    }
});

let div6 = document.createElement('div');
div6.className = "tilda";
section1.append( div6 );

let p11 = document.createElement('p');
p11.className = "textBut1";
div6.append( p11 );
p11.innerHTML = "%" ;

let p12 = document.createElement('p');
p12.className = "textBut2";
div6.append( p12 );
p12.innerHTML = "5" ;

div6.addEventListener( "click" , () => { 
    textarea.innerHTML += "5" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit5' ) {
        textarea.innerHTML += "5" ;
      
    }
});


let div7 = document.createElement('div');
div7.className = "tilda";
section1.append( div7 );

let p13 = document.createElement('p');
p13.className = "textBut1";
div7.append( p13 );
p13.innerHTML = "^" ;

let p14 = document.createElement('p');
p14.className = "textBut2";
div7.append( p14 );
p14.innerHTML = "6" ;

div7.addEventListener( "click" , () => { 
    textarea.innerHTML += "6" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit6' ) {
        textarea.innerHTML += "6" ;
      
    }
});

let div8 = document.createElement('div');
div8.className = "tilda";
section1.append( div8 );

let p15 = document.createElement('p');
p15.className = "textBut1";
div8.append( p15 );
p15.innerHTML = "&" ;

let p16 = document.createElement('p');
p16.className = "textBut2";
div8.append( p16 );
p16.innerHTML = "7" ;

div8.addEventListener( "click" , () => { 
    textarea.innerHTML += "7" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit7' ) {
        textarea.innerHTML += "7" ;
      
    }
});

let div9 = document.createElement('div');
div9.className = "tilda";
section1.append( div9 );

let p17 = document.createElement('p');
p17.className = "textBut1";
div9.append( p17 );
p17.innerHTML = "*" ;

let p18 = document.createElement('p');
p18.className = "textBut2";
div9.append( p18 );
p18.innerHTML = "8" ;

div9.addEventListener( "click" , () => { 
    textarea.innerHTML += "8" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit8' ) {
        textarea.innerHTML += "8" ;
      
    }
});

let div10 = document.createElement('div');
div10.className = "tilda";
section1.append( div10 );

let p19 = document.createElement('p');
p19.className = "textBut1";
div10.append( p19 );
p19.innerHTML = "(" ;

let p20 = document.createElement('p');
p20.className = "textBut2";
div10.append( p20 );
p20.innerHTML = "9" ;

div10.addEventListener( "click" , () => { 
    textarea.innerHTML += "9" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit9' ) {
        textarea.innerHTML += "9" ;
      
    }
});

let div11 = document.createElement('div');
div11.className = "tilda";
section1.append( div11 );

let p21 = document.createElement('p');
p21.className = "textBut1";
div11.append( p21 );
p21.innerHTML = ")" ;

let p22 = document.createElement('p');
p22.className = "textBut2";
div11.append( p22 );
p22.innerHTML = "0" ;

div11.addEventListener( "click" , () => { 
    textarea.innerHTML += "0" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == 'Digit0' ) {
        textarea.innerHTML += "0" ;
      
    }
});

let div12 = document.createElement('div');
div12.className = "tilda";
section1.append( div12 );

let p23 = document.createElement('p');
p23.className = "textBut1";
div12.append( p23 );
p23.innerHTML = "_" ;

let p24 = document.createElement('p');
p24.className = "textBut2";
div12.append( p24 );
p24.innerHTML = "-" ;

div12.addEventListener( "click" , () => { 
    textarea.innerHTML += "-" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == "Minus" ) {
        textarea.innerHTML += "-" ;
      
    }
});

let div13 = document.createElement('div');
div13.className = "tilda";
section1.append( div13 );

let p25 = document.createElement('p');
p25.className = "textBut1";
div13.append( p25 );
p25.innerHTML = "+" ;

let p26 = document.createElement('p');
p26.className = "textBut2";
div13.append( p26 );
p26.innerHTML = "=" ;

div13.addEventListener( "click" , () => { 
    textarea.innerHTML += "=" ;
} )

document.addEventListener('keydown', function(event) {
    if (event.code == "Equal" ) {
        textarea.innerHTML += "=" ;
      
    }
});

let div14 = document.createElement('div');
div14.className = "backspace";
section1.append( div14 );

let p27 = document.createElement('p');
p27.className = "textBut1";
div14.append( p27 );
p27.innerHTML = "" ;

let p28 = document.createElement('p');
p28.className = "textButBackspace";
div14.append( p28 );
p28.innerHTML = "Backspace" ;

div14.addEventListener( "click" , () => { 
    textarea.innerHTML += "" ;
} )

/*=======*/


let section2 = document.createElement('div');
section2.className = "section2";
section.append( section2 );

let div15 = document.createElement('div');
div15.className = "tab";
section2.append( div15 );

let p29 = document.createElement('p');
p29.className = "textBut1";
div15.append( p29 );
p29.innerHTML = "" ;

let p30 = document.createElement('p');
p30.className = "textButBackspace";
div15.append( p30 );
p30.innerHTML = "Tab" ;


let div16 = document.createElement('div');
div16.className = "tilda";
section2.append( div16 );

let p31 = document.createElement('p');
p31.className = "textBut1";
div16.append( p29 );
p31.innerHTML = "" ;

let p32 = document.createElement('p');
p32.className = "textButBackspace";
div16.append( p32 );
p32.innerHTML = "Q" ;

let div17 = document.createElement('div');
div17.className = "tilda";
section2.append( div17 );

let p33 = document.createElement('p');
p33.className = "textBut1";
div17.append( p33 );
p33.innerHTML = "" ;

let p34 = document.createElement('p');
p34.className = "textButBackspace";
div17.append( p34 );
p34.innerHTML = "W" ;


let div18 = document.createElement('div');
div18.className = "tilda";
section2.append( div18 );

let p35 = document.createElement('p');
p35.className = "textBut1";
div18.append( p35 );
p35.innerHTML = "" ;

let p36 = document.createElement('p');
p36.className = "textButBackspace";
div18.append( p36 );
p36.innerHTML = "E" ;


let div19 = document.createElement('div');
div19.className = "tilda";
section2.append( div19 );

let p37 = document.createElement('p');
p37.className = "textBut1";
div19.append( p37 );
p37.innerHTML = "" ;

let p38 = document.createElement('p');
p38.className = "textButBackspace";
div19.append( p38 );
p38.innerHTML = "R" ;


let div20 = document.createElement('div');
div20.className = "tilda";
section2.append( div20 );

let p39 = document.createElement('p');
p39.className = "textBut1";
div20.append( p39 );
p39.innerHTML = "" ;

let p40 = document.createElement('p');
p40.className = "textButBackspace";
div20.append( p40 );
p40.innerHTML = "T" ;


let div21 = document.createElement('div');
div21.className = "tilda";
section2.append( div21 );

let p41 = document.createElement('p');
p41.className = "textBut1";
div21.append( p41 );
p41.innerHTML = "" ;

let p42 = document.createElement('p');
p42.className = "textButBackspace";
div21.append( p42 );
p42.innerHTML = "Y" ;


let div22 = document.createElement('div');
div22.className = "tilda";
section2.append( div22 );

let p43 = document.createElement('p');
p43.className = "textBut1";
div22.append( p43 );
p43.innerHTML = "" ;

let p44 = document.createElement('p');
p44.className = "textButBackspace";
div22.append( p44 );
p44.innerHTML = "U" ;


let div23 = document.createElement('div');
div23.className = "tilda";
section2.append( div23 );

let p45 = document.createElement('p');
p45.className = "textBut1";
div23.append( p45 );
p45.innerHTML = "" ;

let p46 = document.createElement('p');
p46.className = "textButBackspace";
div23.append( p46 );
p46.innerHTML = "I" ;


let div24 = document.createElement('div');
div24.className = "tilda";
section2.append( div24 );

let p47 = document.createElement('p');
p47.className = "textBut1";
div24.append( p47 );
p47.innerHTML = "" ;

let p48 = document.createElement('p');
p48.className = "textButBackspace";
div24.append( p48 );
p48.innerHTML = "O" ;


let div25 = document.createElement('div');
div25.className = "tilda";
section2.append( div25 );

let p49 = document.createElement('p');
p49.className = "textBut1";
div25.append( p49 );
p49.innerHTML = "" ;

let p50 = document.createElement('p');
p50.className = "textButBackspace";
div25.append( p50 );
p50.innerHTML = "P" ;


let div26 = document.createElement('div');
div26.className = "tilda";
section2.append( div26 );

let p51 = document.createElement('p');
p51.className = "textBut1";
div26.append( p51 );
p51.innerHTML = "" ;

let p52 = document.createElement('p');
p52.className = "textButBackspace";
div26.append( p52 );
p52.innerHTML = "[" ;


let div27 = document.createElement('div');
div27.className = "tilda";
section2.append( div27 );

let p53 = document.createElement('p');
p53.className = "textBut1";
div27.append( p53 );
p53.innerHTML = "" ;

let p54 = document.createElement('p');
p54.className = "textButBackspace";
div27.append( p54 );
p54.innerHTML = "]" ;


let div28 = document.createElement('div');
div28.className = "tilda";
section2.append( div28 );

let p55 = document.createElement('p');
p55.className = "textBut1";
div28.append( p55 );
p55.innerHTML = "" ;

let p56 = document.createElement('p');
p56.className = "textButBackspace";
div28.append( p56 );
p56.innerHTML = "\\" ;


let div29 = document.createElement('div');
div29.className = "del";
section2.append( div29 );

let p57 = document.createElement('p');
p57.className = "textBut1";
div29.append( p57 );
p57.innerHTML = "" ;

let p58 = document.createElement('p');
p58.className = "textButBackspace";
div29.append( p58 );
p58.innerHTML = "Del" ;

/*=========*/

let section3 = document.createElement('div');
section3.className = "section3";
section.append( section3 );

let div30 = document.createElement('div');
div30.className = "capslk";
section3.append( div30 );

let div31 = document.createElement('div');
div31.className = "tilda";
section3.append( div31 );

let div32 = document.createElement('div');
div32.className = "tilda";
section3.append( div32 );

let div33 = document.createElement('div');
div33.className = "tilda";
section3.append( div33 );

let div34 = document.createElement('div');
div34.className = "tilda";
section3.append( div34 );

let div35 = document.createElement('div');
div35.className = "tilda";
section3.append( div35 );

let div36 = document.createElement('div');
div36.className = "tilda";
section3.append( div36 );

let div37 = document.createElement('div');
div37.className = "tilda";
section3.append( div37 );

let div38 = document.createElement('div');
div38.className = "tilda";
section3.append( div38 );

let div39 = document.createElement('div');
div39.className = "tilda";
section3.append( div39 );

let div40 = document.createElement('div');
div40.className = "tilda";
section3.append( div40 );

let div41 = document.createElement('div');
div41.className = "tilda";
section3.append( div41 );

let div42 = document.createElement('div');
div42.className = "enter";
section3.append( div42 );

/*========================*/

let section4 = document.createElement('div');
section4.className = "section4";
section.append( section4 );


let div43 = document.createElement('div');
div43.className = "shift";
section4.append( div43 );

let div44 = document.createElement('div');
div44.className = "tilda";
section4.append( div44 );

let div45 = document.createElement('div');
div45.className = "tilda";
section4.append( div45 );

let div46 = document.createElement('div');
div46.className = "tilda";
section4.append( div46 );

let div47 = document.createElement('div');
div47.className = "tilda";
section4.append( div47 );

let div48 = document.createElement('div');
div48.className = "tilda";
section4.append( div48 );

let div49 = document.createElement('div');
div49.className = "tilda";
section4.append( div49 );

let div50 = document.createElement('div');
div50.className = "tilda";
section4.append( div50 );

let div51 = document.createElement('div');
div51.className = "tilda";
section4.append( div51 );

let div52 = document.createElement('div');
div52.className = "tilda";
section4.append( div52 );

let div53 = document.createElement('div');
div53.className = "tilda";
section4.append( div53 );

let div54 = document.createElement('div');
div54.className = "artop";
section4.append( div54 );

let div55 = document.createElement('div');
div55.className = "shift";
section4.append( div55 );

/*=============*/

let section5 = document.createElement('div');
section5.className = "section5";
section.append( section5 );

let div56 = document.createElement('div');
div56.className = "ctrl";
section5.append( div56 );

let div57 = document.createElement('div');
div57.className = "win";
section5.append( div57 );

let div58 = document.createElement('div');
div58.className = "alt";
section5.append( div58 );

let div59 = document.createElement('div');
div59.className = "prob";
section5.append( div59 );

let div60 = document.createElement('div');
div60.className = "tilda";
section5.append( div60 );

let div61 = document.createElement('div');
div61.className = "arleft";
section5.append( div61 );

let div62 = document.createElement('div');
div62.className = "arbot";
section5.append( div62 );

let div63 = document.createElement('div');
div63.className = "arright";
section5.append( div63 );

let div64 = document.createElement('div');
div64.className = "ctrl";
section5.append( div64 );

/*=========*/




