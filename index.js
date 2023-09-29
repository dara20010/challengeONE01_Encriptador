//Variables
var btnEncriptar =document.querySelector('.btnEncriptar');
var btnDesencriptar =document.querySelector('.btnDesencriptar');
var nino =document.querySelector('.nino');
var contenedorParrafo =document.querySelector('.contenedorParrafo');
var resultado =document.querySelector('.textoResultado');

btnEncriptar.onclick=encriptar;
btnDesencriptar.onclick=desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajaTexto=recuperarTexto();
    console.log(cajaTexto)
    var textoEncriptado = encriptarTexto(cajaTexto)
    console.log(textoEncriptado)
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajaTexto=recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
}
function recuperarTexto(){
    var cajaTexto = document.querySelector(".cajaTexto")
    return cajaTexto.value;
}
function ocultarAdelante(){
    nino.classList.add("ocultar")
    contenedorParrafo.classList.add("ocultar");
}
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btnCopiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});