// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo(){
    let elemento = document.getElementById("amigo").value;
    if (elemento != "") {
        nombresSorteados.push(elemento);
        console.log(nombresSorteados);
        limpiarCaja();
        recorrerLista();
        return;
    } else {
        alert("Por favor, inserte un nombre.");
    }
}
function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

function recorrerLista(){
    let lista = nombresSorteados;
    document.getElementById('listaAmigos').innerText = lista;
    lista.innerHTML = "";
    for(var i=0; i<nombresSorteados.length; i++){
        asignarTextoElemento("ul",`${lista}`);
    }
    
}

agregarAmigo();
// recorrerLista();
// asignarTextoElemento("li", "lucas"); ejemplo de q funciona
// asignarTextoElemento("li",`${elemento}`);