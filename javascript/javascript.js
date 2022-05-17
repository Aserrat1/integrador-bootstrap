var entrada = 200;

function resumen() {
    var cant=parseInt(document.getElementById("cantidad").value);
    var cat=parseFloat(document.getElementById("categoria").value);
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("correo").value;
    if (isNaN(cant) || nombre==="" || apellido==="" || correo==="" || cant<1){
        var mensaje="";
        //condición ? expr1 : expr2 
        nombre==="" ? mensaje+=" ¡Debe ingresar un nombre valido!<br/>":mensaje+="";
        apellido==="" ? mensaje+=" ¡Debe ingresar un apellido valido!<br/>":mensaje+="";
        correo==="" ? mensaje+=" ¡Debe ingresar un correo valido!<br/>":mensaje+="";
        isNaN(cant) ? mensaje+=" ¡Ingrese por favor un valor en cantidad!<br/>":mensaje+="";
        cant<1 ? mensaje+=" ¡El valor de cantidad debe ser mayor a 0!<br/>":mensaje+="";
        document.getElementById("totPagar").innerHTML= mensaje;
        document.getElementById("diversion").style.backgroundColor="#f7d7da";
        document.getElementById("diversion").style.color="#842430";
        document.getElementById("diversion").style.borderColor="#842430";
        document.getElementById("diversion").style.display = 'block';
    }
    else if (cant>0){
        let resultado = (cant*entrada)*cat;
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

