
function validarTexto() {
  var texto1 = document.getElementById("texto1").value;
  var mensajeError = document.getElementById("mensajeError");
  // Expresión regular para validar letras minúsculas
  var expresion = /^[a-z\s]+$/;
  if (!expresion.test(texto1)) {
      mensajeError.textContent = "";
      document.getElementById("texto1").value = '';
  } else {
      mensajeError.textContent = "";
  }
}

function encriptar() {
  let texto1 = document.getElementById("texto1").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");
  

  let textoCifrado = texto1
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  if (texto1.length != 0) {
    document.getElementById("texto1").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    muñeco.src = "./img/encriptado1.png";
  } else {
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = alert("Ingresa el texto que deseas encriptar o desencriptar");

    
  }
}

function desencriptar() {
  let texto1= document.getElementById("texto1").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let muñeco = document.getElementById("muñeco");

  let textoCifrado = texto1
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  
    if (texto1.length != 0) {
      document.getElementById("texto1").value = textoCifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      muñeco.src = "./img/desencriptado.png";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = alert("Ingresa el texto que deseas encriptar o desencriptar");
      
    }

   
    
}
function copiar() {
  let valor = document.getElementById("resultado").innerText;
  navigator.clipboard.writeText(valor);
  alert("¡copiado al portapapeles!");
}


