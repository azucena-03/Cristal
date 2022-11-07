function changeImage(x, image){
    if (x == 1) {
        image.src = "../img/items/item5.1.jpg";
    }
    if(x == 2){
        image.src = "../img/items/item5.jpg";
    }
    if(x == 3){
        image.src = "../img/items/item6.1.jpg";
    }
    if(x == 4){
        image.src = "../img/items/item6.jpg";
    }
    if(x == 5){
        image.src = "../img/items/item7.1.jpg";
    }
    if(x == 6){
        image.src = "../img/items/item7.jpg";
    }
    if(x == 7){
        image.src = "../img/items/item8.1.jpg";
    }
    if(x == 8){
        image.src = "../img/items/item8.jpg";
    }
}

function rotar(e){
    e.style.opacity = "0.7";
    e.style.transition = "all 1s ease-out";
}

function origin(e){
    e.style.opacity = "1";
    e.style.transition = "all 1s ease-out";
}

for(var n = 0; n < document.getElementsByClassName("category__name").length; n++) {
    document.getElementsByClassName("category__name")[n].setAttribute("onmouseover", "rotar(this)");
    document.getElementsByClassName("category__name")[n].setAttribute("onmouseout", "origin(this)");
}