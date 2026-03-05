const text="Abu Shaid Prodhan";
let i=0;

function typing(){

if(document.getElementById("typing")){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,100);

}

}

}

typing();