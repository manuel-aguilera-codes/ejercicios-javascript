// Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada vez que se haga clic en el botón,
// el texto debe actualizarse para mostrar el número total de clics realizados

let contador = 0;

let botonClic = document.getElementById("boton-clic");
let textoContador = document.getElementById("texto-contador");

botonClic.addEventListener("click", function () {
  contador++;
  textoContador.textContent = "Número de clics: " + contador;
});
