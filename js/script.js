//EFECTOS EN IMAGENES

function zoom(){
    a = document.getElementById("hero-img");
    a.style.transform = "scale(0.9, 0.9)";
    a.style.transition = "all 1s";

    setTimeout("volver()", 1000);
}
function volver(){
    a = document.getElementById("hero-img");
    a.style.transform = "scale(1,1)";
    a.style.transition = "all 1s";

    setTimeout("zoom()", 1000);
}
zoom(); volver();

//BOTON
var btnAbout = document.getElementById("btn-about");

btnAbout.onmouseover = function(){
    btnAbout.style.backgroundColor = "rgb(209, 172, 161)";
    btnAbout.style.color = "rgb(238, 238, 238)";
}
btnAbout.onmouseout = function(){
    btnAbout.style.backgroundColor = "transparent";
    btnAbout.style.color = "rgb(150, 127, 120)";
}

var btnNew = document.getElementById("btn-new");

btnNew.onmouseover = function(){
    btnNew.style.backgroundColor = "rgb(209, 172, 161)";
    btnNew.style.color = "rgb(238, 238, 238)";
}
btnNew.onmouseout = function(){
    btnNew.style.backgroundColor = "transparent";
    btnNew.style.color = "rgb(150, 127, 120)";
}
//MENU
function opmenu (x){
    if(x == 1){
        document.getElementById("new-img-1").src = "img/items/necklace/necklace_1.png";
        document.getElementById("new-tit").innerHTML = "Lorem";
        document.getElementById("new-d").innerHTML = "S/. 120.00";
        document.getElementById("new-img-2").src = "img/items/necklace/necklace_2.png";
        document.getElementById("new-tit-2").innerHTML = "Lorem";
        document.getElementById("new-d-2").innerHTML = "S/. 92.50";
        document.getElementById("new-img-3").src = "img/items/necklace/necklace_3.png";
        document.getElementById("new-tit-3").innerHTML = "Lorem";
        document.getElementById("new-d-3").innerHTML = "S/. 73.50";
        document.getElementById("new-img-4").src = "img/items/necklace/necklace_4.png";
        document.getElementById("new-tit-4").innerHTML = "Lorem";
        document.getElementById("new-d-4").innerHTML = "S/. 80.00";
    }else if (x == 2){
        document.getElementById("new-img-1").src = "img/items/rings/rings1.png";
        document.getElementById("new-tit").innerHTML = "Lorem";
        document.getElementById("new-d").innerHTML = "S/. 85.00";
        document.getElementById("new-img-2").src = "img/items/rings/rings2.png";
        document.getElementById("new-tit-2").innerHTML = "Lorem";
        document.getElementById("new-d-2").innerHTML = "S/. 100.00";
        document.getElementById("new-img-3").src = "img/items/rings/rings3.png";
        document.getElementById("new-tit-3").innerHTML = "Lorem";
        document.getElementById("new-d-3").innerHTML = "S/. 95.00";
        document.getElementById("new-img-4").src = "img/items/rings/rings4.png";
        document.getElementById("new-tit-4").innerHTML = "Lorem";
        document.getElementById("new-d-4").innerHTML = "S/. 80.50";
    }else{
        document.getElementById("new-img-1").src = "img/items/bracelets/bracelets_1.png";
        document.getElementById("new-tit").innerHTML = "Lorem";
        document.getElementById("new-d").innerHTML = "S/. 80.00";
        document.getElementById("new-img-2").src = "img/items/bracelets/bracelets_2.png";
        document.getElementById("new-tit-2").innerHTML = "Lorem";
        document.getElementById("new-d-2").innerHTML = "S/. 95.00";
        document.getElementById("new-img-3").src = "img/items/bracelets/bracelets_3.png";
        document.getElementById("new-tit-3").innerHTML = "Lorem";
        document.getElementById("new-d-3").innerHTML = "S/. 50.00";
        document.getElementById("new-img-4").src = "img/items/bracelets/bracelets_4.png";
        document.getElementById("new-tit-4").innerHTML = "Lorem";
        document.getElementById("new-d-4").innerHTML = "S/. 65.00";
    }
}

//IMAGENES
function rotar(e){
    e.style.transform = "translateY(-5px)";
    e.style.transition = "all 1s";
}

function origin(e){
    e.style.transform = "translateY(0)";
    e.style.transition = "all 1s";
}

for(var n = 0; n < document.getElementsByClassName("new__item").length; n++) {
    document.getElementsByClassName("new__item")[n].setAttribute("onmouseover", "rotar(this)");
    document.getElementsByClassName("new__item")[n].setAttribute("onmouseout", "origin(this)");
}
//PARRAFO
var p1 = ["S/. 150", "Nuevo"];  
var p = 0;

setInterval(muestraPa, 2000);
function muestraPa(){
    p++
    if(p >= p1.length){
        p = 0;
    }

    document.getElementById("info-a").innerHTML = p1[p];

}

var p2 = ["S/. 200", "Nuevo"];
var j = 0;

setInterval(muestraPb, 2000);
function muestraPb(){
    j++
    if(j >= p2.length){
        j = 0;
    }

    document.getElementById("info-b").innerHTML = p2[j];

}
//
var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = 'https://i.pinimg.com/564x/09/5b/e1/095be11baf07e57e1c0a06fe3cd64091.jpg';
images[1] = 'https://i.pinimg.com/564x/da/53/99/da5399e4531688e64c0cf58b7f6e3860.jpg';

function changePicture() {

    document.getElementById("collection-image").style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changePicture, slideTime);
}

window.onload = changePicture;

//
var btnMore = document.getElementById("btn-more");

btnMore.onmouseover = function(){
    btnMore.style.backgroundColor = "rgb(238, 238, 238)";
    btnMore.style.color = "rgb(150, 127, 120)";
    btnMore.style.transition = "all 1s ease-out";
}
btnMore.onmouseout = function(){
    btnMore.style.backgroundColor = "transparent";
    btnMore.style.color = "rgb(238, 238, 238)";
    btnMore.style.transition = "all 1s ease-out";
}

//SOCIAL
function social(n){
    switch(n){
        case 0 : window.open("https://www.facebook.com", "_blank");
        break;
        case 1 : window.open("https://www.instagram.com", "_blank");
        break;
        case 2 : window.open("https://www.twitter.com", "_blank");
    }
}
//
