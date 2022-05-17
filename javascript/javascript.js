var entrada = 200;

function resumen() {
    var cant=parseInt(document.getElementById("cantidad").value);
    var cat=parseFloat(document.getElementById("categoria").value);
    if (cant>0){
        let resultado = (cant*entrada)*cat;
        document.getElementById("totPagar").innerHTML= "Total a pagar: $ "+resultado;
        document.getElementById("diversion").style.display = 'block';
    }
    else if (cant<1){
        document.getElementById("totPagar").innerHTML= "¡Debe ingresar una cantidad valida mayor a 0!"
        document.getElementById("diversion").style.display = 'block';
    }
}


let a=document.getElementById("resumen");
a.onclick = resumen;

let b=document.getElementById("borrar");
b.onclick = ()=> document.getElementById("diversion").style.display = 'none';

