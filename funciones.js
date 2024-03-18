//variabless
let encriptarBtn = document.getElementById("encriptarBtn");
let desencriptarBtn = document.getElementById("desencriptarBtn");
let copiarBtn = document.getElementById("copiarBtn");
let textoOriginalTextarea = document.getElementById("textoOriginal");
let textoProcesadoTextarea = document.getElementById("textoProcesado");
let limpiarBoxBtn = document.getElementById("limpiarBox");


// Función para encriptar
function encriptarTexto(texto) {
    // Convertir el texto a minúsculas
    texto = texto.toLowerCase();

    // Aplicar las reglas 
    texto = texto.replace(/e/g, 'enter')
                 .replace(/i/g, 'imes')
                 .replace(/a/g, 'ai')
                 .replace(/o/g, 'ober')
                 .replace(/u/g, 'ufat');

    return texto;
}

// Función para desencriptar
function desencriptarTexto(texto) {
    // las reglas 
    texto = texto.replace(/enter/g, 'e')
                 .replace(/imes/g, 'i')
                 .replace(/ai/g, 'a')
                 .replace(/ober/g, 'o')
                 .replace(/ufat/g, 'u');

    return texto;
}


// Función para copiar
function copiarTexto() {
    let textoProcesado = document.getElementById("textoProcesado").value;
    // Copiar el texto procesado
    navigator.clipboard.writeText(textoProcesado)
        .then(function() {
            alert("Texto copiado al portapapeles");
        })
        .catch(function(error) {
            console.error("Error al copiar el texto: ", error);
        });
}

encriptarBtn.addEventListener("click", function() {
    let textoOriginal = textoOriginalTextarea.value;
    let textoEncriptado = encriptarTexto(textoOriginal);
    textoProcesadoTextarea.value = textoEncriptado;
});

desencriptarBtn.addEventListener("click", function() {
    let textoEncriptado = textoOriginalTextarea.value;
    let textoDesencriptado = desencriptarTexto(textoEncriptado);
    textoProcesadoTextarea.value = textoDesencriptado;
});

copiarBtn.addEventListener("click", copiarTexto);

limpiarBoxBtn.addEventListener("click", function() {
    textoOriginalTextarea.value = ''; 
});
