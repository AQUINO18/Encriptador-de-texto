function encriptador() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto 
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/Muten_Roshi.webp";
    } else {
        muñeco.src = "./img/Dragon_ball.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Hey!", "Debes ingresar un texto", "warning");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");

     if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        muñeco.src = "./img/Dragon_ball.png";
     } else {
         muñeco.src = "./img/Muten_Roshi.webp";
         tituloMensaje.textContent = "Ningun mensaje encontrado";
         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
         swal("Hey!", "Debes ingresar un texto", "warning");
     }
}
