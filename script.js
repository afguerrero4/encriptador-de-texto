const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/*document.addEventListener("DOMContentLoaded", function() {

    function mostrarMensajeSiVacio() {
        const textArea = document.querySelector(".text-area");
        const mensajeArea = document.querySelector(".mensaje");

        if (textArea.value.trim() === "") {
            mensajeArea.value = "Ningún mensaje fue encontrado. Ingresa el texto que desees encriptar o desencriptar.";
        } else {
            // Aquí puedes agregar la lógica de encriptar o desencriptar si el texto no está vacío
            mensajeArea.value = ""; // Limpiamos el área de mensaje si no está vacío
        }
    }

   // Asignamos la función a los botones de encriptar y desencriptar
    document.querySelector(".btn-encriptar").addEventListener("click", mostrarMensajeSiVacio);
    document.querySelector(".btn-desencriptar").addEventListener("click", mostrarMensajeSiVacio);

});*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i <matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

document.getElementById('copiar').addEventListener('click', function() {
    // Seleccionar el contenido del textarea
    let mensaje = document.querySelector('.mensaje');
    mensaje.select();
    mensaje.setSelectionRange(0, 99999); // Para móviles

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(mensaje.value).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
});
