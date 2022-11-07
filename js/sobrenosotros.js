

/*sdjlkljdalkd*/
const imagenes=["../img/IMAGEN1ENSOBRENOSOTROS.jfif","../img/collar1.jpeg","../img/collar2.jfif","../img/collar3.jfif"]
var c=0

function carrusel(){
    document.getElementById("imgsection").setAttribute('src',imagenes[c])
    c++;
    if(c>=imagenes.length) c=0;
    setTimeout(carrusel,2000)
}

function zoom(e)

{
    e.style.transform="scale(0.9,0.9)";
    e.style.filter="opacity(50%)";
    e.style.transition="all 1s";
}

function origen(e)
{
    e.style.transform="scale(1,1)";
    e.style.filter="opacity(100%)";
    e.style.transition="all 1s";
}

//////--------------las opciones del menu-----------------///////
function openmenu(n)
{
    if(n==1)
    {
        document.getElementById("img-lugar").src="../img/tienda1.jfif";
        document.getElementById("tit").innerHTML="SAN ISIDRO";
    }

    else if(n==2)
    {
        document.getElementById("img-lugar").src="../img/tienda2.jfif";
        document.getElementById("tit").innerHTML="MIRAFLORES";
    }

    else if(n==3)
    {
        document.getElementById("img-lugar").src="../img/tienda3.jfif";
        document.getElementById("tit").innerHTML="LA MOLINA";
    }

    else if(n==4)
    {
        document.getElementById("img-lugar").src="../img/tienda4.jfif";
        document.getElementById("tit").innerHTML="LA VICTORIA";
    }

    else 
    {
        document.getElementById("img-lugar").src="../img/tienda5.jfif";
        document.getElementById("tit").innerHTML="LOS OLIVOS";
    }
}