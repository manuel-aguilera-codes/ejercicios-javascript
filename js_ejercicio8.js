/*
Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
• Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
• Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de
línea. */

console.log('cargado')

let textArea = document.getElementById('texto');

textArea.addEventListener('input', contarTodo);


function contarTodo() {
    const texto = textArea.value;

    let caracteres = texto.replace(/\s/g, '').length;
    let palabras = texto.trim().split(/\s+/).filter(Boolean).length;

    document.getElementById('contador-caracteres').textContent = caracteres;
    document.getElementById('contador-palabras').textContent = palabras;

}