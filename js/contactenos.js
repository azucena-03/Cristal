
//proceso de validar entrada de caracter
document.querySelector('input[name="apellidos"]').addEventListener("keypress", function(event){
    var ascii = event.keyCode || event.wich;
    if((ascii>= 48 && ascii<=57) || (ascii== 46)){
        window.event.preventDefault();
            return;
    }
});
document.querySelector('input[name="celular"]').addEventListener("keypress", function(event){
    var longitud = document.querySelector('input[name="celular"]').value.length;
    if(longitud>=9){
        window.event.preventDefault();
        return;
    }

    /* usar codigo ascii para permitir solo numeros*/
    var ascii = event.keyCode || event.wich;
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        return;
    }
});
// ---------- Usando expresiones regulares -----------
function nuevo(frm){

    test=/^\d{9}$/;
    if(!test.test(frm.celular.value)){
        window.event.preventDefault();
        alert("Número de celular incompleto");
        return;
    }
    
    test=/^\s*$/;
    if(test.test(frm.apellidos.value)){
        window.event.preventDefault();
        alert("Ingresar Nombre");
        return;
    }
    /*email : jaimesalinas@hotmail.com*/
    test=/^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    /*email : i20227869@cibertec.edu.pe */
    test=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!test.test(frm.email.value)){
        window.event.preventDefault();
        alert("Formato de email incorrecto");
        return;
    }

    test=/^\s*$/;
    if(test.test(frm.txtmensaje.value)){
        window.event.preventDefault();
        alert("Ingresar Mensaje");
        return;
    }

    alert("Datos ingresados correctamente");
}
/*imagenes*/

function mostrargris(x){
    x.setAttribute("style","filter: grayscale(90%); transform: scale(1.05);")
}
function normalidad(x){//reutizable para regresar solo con la x
    x.setAttribute("style","")
}
