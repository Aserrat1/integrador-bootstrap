var entrada = 200;

function resumen() {
    var cant=parseInt(document.getElementById("cantidad").value);
    var cat=parseFloat(document.getElementById("categoria").value);
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("correo").value;
    var atposition=correo.indexOf("@");  
    var dotposition=correo.lastIndexOf("."); 
    if (atposition<1 || dotposition<1 || atposition>dotposition||isNaN(cant) || nombre==="" || apellido==="" || correo==="" || cant<1){
        var mensaje="";
        //uso de operadores ternarios: Si se cumple condicion, cambiame el bordercolor y modificame el mensaje, sino, pone el bordercolor original.
        nombre==="" ? (document.getElementById("nombre").style.borderColor="#842430",mensaje+=" ¡Debe ingresar un nombre!<br/>"):document.getElementById("nombre").style.borderColor="#d1d5d8";
        apellido==="" ? (document.getElementById("apellido").style.borderColor="#842430",mensaje+=" ¡Debe ingresar un apellido!<br/>"):document.getElementById("apellido").style.borderColor="#d1d5d8";
        correo==="" ? (document.getElementById("correo").style.borderColor="#842430",mensaje+=" ¡Debe ingresar un correo!<br/>") : (atposition<1 || dotposition<1 || atposition>dotposition) ? (document.getElementById("correo").style.borderColor="#842430",mensaje+=" ¡El correo ingresado, no es un valor valido!<br/>"):document.getElementById("correo").style.borderColor="#d1d5d8";
        isNaN(cant) ? (document.getElementById("cantidad").style.borderColor="#842430",mensaje+=" ¡Ingrese por favor un valor en cantidad!<br/>"):cant<1 ? mensaje+=" ¡El valor de cantidad debe ser mayor a 0!<br/>":document.getElementById("cantidad").style.borderColor="#d1d5d8";
        //Cambio de color del mensaje y asignacion del mismo
        document.getElementById("totPagar").innerHTML= mensaje;
        document.getElementById("diversion").style.backgroundColor="#f7d7da";
        document.getElementById("diversion").style.color="#842430";
        document.getElementById("diversion").style.borderColor="#842430";
        document.getElementById("diversion").style.display = 'block';
    }
    else if (cant>0){
        let resultado = (cant*entrada)*cat;
        document.getElementById("nombre").style.borderColor="#d1d5d8";
        document.getElementById("apellido").style.borderColor="#d1d5d8";
        document.getElementById("correo").style.borderColor="#d1d5d8";
        document.getElementById("cantidad").style.borderColor="#d1d5d8";
        document.getElementById("totPagar").innerHTML= "Total a pagar: $ "+resultado;
        document.getElementById("diversion").style.backgroundColor="#cfe2ff";
        document.getElementById("diversion").style.color="#003b91";
        document.getElementById("diversion").style.borderColor="#003b91";
        document.getElementById("diversion").style.display = 'block';
    }
}


let a=document.getElementById("resumen");
a.onclick = resumen;

let b=document.getElementById("borrar");
b.onclick = ()=> document.getElementById("diversion").style.display = 'none';

