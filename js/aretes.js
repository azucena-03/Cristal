function cambio(){
    document.querySelector("#earring-b").style.transition = "all 1s";

    setTimeout("carrusel()", 1000); 
}

var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'https://images.pexels.com/photos/9421379/pexels-photo-9421379.jpeg';
images[1] = 'https://images.pexels.com/photos/13755908/pexels-photo-13755908.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
images[2] = 'https://images.pexels.com/photos/8541546/pexels-photo-8541546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

function carrusel() {

    document.getElementById("earring-b").style.backgroundImage = "url(" + images[i] + ")";
    document.querySelector("#earring-b").style.transition = "all 1s";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("cambio()", slideTime);
}

window.onload = carrusel;


function rotar(e){
    e.style.transform = "translateY(-5px)";
    e.style.transition = "all 1s";
}

function origin(e){
    e.style.transform = "translateY(0)";
    e.style.transition = "all 1s";
}

for(var n = 0; n < document.getElementsByClassName("card__item").length; n++) {
    document.getElementsByClassName("card__item")[n].setAttribute("onmouseover", "rotar(this)");
    document.getElementsByClassName("card__item")[n].setAttribute("onmouseout", "origin(this)");
}

function backColor(a){
    a.style.backgroundColor = "rgb(224, 171, 130)";
    a.style.transition = "all 1s";
}

function backTran(a){
    a.style.backgroundColor = "transparent";
    a.style.transition = "all 1s";
}

for(var n = 0; n < document.getElementsByClassName("card__img").length; n++) {
    document.getElementsByClassName("card__img")[n].setAttribute("onmouseover", "backColor(this)");
    document.getElementsByClassName("card__img")[n].setAttribute("onmouseout", "backTran(this)");
}