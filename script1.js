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

p6.addEventListener( "click" , () => { 
    textarea.innerHTML += "2" ;
} )

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

p8.addEventListener( "click" , () => { 
    textarea.innerHTML += "3" ;
} )

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

p10.addEventListener( "click" , () => { 
    textarea.innerHTML += "4" ;
} )

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

p12.addEventListener( "click" , () => { 
    textarea.innerHTML += "5" ;
} )

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

p14.addEventListener( "click" , () => { 
    textarea.innerHTML += "6" ;
} )

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

p16.addEventListener( "click" , () => { 
    textarea.innerHTML += "7" ;
} )

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

p18.addEventListener( "click" , () => { 
    textarea.innerHTML += "8" ;
} )

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

p20.addEventListener( "click" , () => { 
    textarea.innerHTML += "9" ;
} )

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

p22.addEventListener( "click" , () => { 
    textarea.innerHTML += "0" ;
} )

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

p24.addEventListener( "click" , () => { 
    textarea.innerHTML += "-" ;
} )

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

p26.addEventListener( "click" , () => { 
    textarea.innerHTML += "=" ;
} )

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

p28.addEventListener( "click" , () => { 
    textarea.innerHTML += "" ;
} )

/*=======*/


let section2 = document.createElement('div');
section2.className = "section2";
section.append( section2 );

let div15 = document.createElement('div');
div15.className = "tab";
section2.append( div15 );

let div16 = document.createElement('div');
div16.className = "tilda";
section2.append( div16 );

let div17 = document.createElement('div');
div17.className = "tilda";
section2.append( div17 );

let div18 = document.createElement('div');
div18.className = "tilda";
section2.append( div18 );

let div19 = document.createElement('div');
div19.className = "tilda";
section2.append( div19 );

let div20 = document.createElement('div');
div20.className = "tilda";
section2.append( div20 );

let div21 = document.createElement('div');
div21.className = "tilda";
section2.append( div21 );

let div22 = document.createElement('div');
div22.className = "tilda";
section2.append( div22 );

let div23 = document.createElement('div');
div23.className = "tilda";
section2.append( div23 );

let div24 = document.createElement('div');
div24.className = "tilda";
section2.append( div24 );

let div25 = document.createElement('div');
div25.className = "tilda";
section2.append( div25 );

let div26 = document.createElement('div');
div26.className = "tilda";
section2.append( div26 );

let div27 = document.createElement('div');
div27.className = "tilda";
section2.append( div27 );

let div28 = document.createElement('div');
div28.className = "tilda";
section2.append( div28 );

let div29 = document.createElement('div');
div29.className = "del";
section2.append( div29 );

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




