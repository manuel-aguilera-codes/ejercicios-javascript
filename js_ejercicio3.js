/* Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
- Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un nuevo elemento de la lista.
- Añade un botón al lado de cada elemento para eliminarlo de la lista.*/

let listaDinamica = document.getElementById("lista-dinamica");
let inputTexto = document.getElementById("input-texto");
let botonAgregar = document.getElementById("boton-agregar");

botonAgregar.addEventListener("click", function () {
  let texto = inputTexto.value;
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = texto;
  listaDinamica.appendChild(nuevoElemento);
});
