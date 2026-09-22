/* Crea una página con un campo de entrada para especificar la longitud de una contraseña 
y un botón que diga “Generar contraseña”.
• Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
letras, números y caracteres especiales.
• Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la
longitud debe ser mayor o igual a 4. */

let formulario = document.getElementById("formulario");
let longitudInput = document.getElementById("longitud");
let errorMsg = document.getElementById("error-message");
let passwordTitle = document.getElementById("password-title");
let newPassword = document.getElementById("new-password");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    let longitud = longitudInput.value;
    if (longitud < 4) {
        errorMsg.textContent = "La longitud debe ser mayor o igual a 4";
        passwordTitle.textContent = "";
        newPassword.textContent = "";
    } else {
        errorMsg.textContent = "";
        passwordTitle.textContent = "Contraseña generada:";
        newPassword.textContent = generarContraseña(longitud);
    }
});

function generarContraseña(longitud) {
    let contrasenia = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numeros = "1234567890";
    let simbolos = "!@#$%^&*()_+";
    for (let i = 0; i < longitud; i++) {
        let tipo = Math.floor(Math.random() * 3);
        let index = 0;
        if (tipo === 0) {
            index = Math.floor(Math.random() * letras.length)
            contrasenia += letras[index];
        } else if (tipo === 1) {
            index = Math.floor(Math.random() * numeros.length);
            contrasenia += numeros[index];
        } else {
            index = Math.floor(Math.random() * simbolos.length);
            contrasenia += simbolos[index];
        }
    }
    return contrasenia;
}