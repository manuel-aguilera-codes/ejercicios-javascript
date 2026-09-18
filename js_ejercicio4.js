// Crea una página con un campo de texto y una lista predefinida de elementos.
// - Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
// mostrar solo los elementos que contienen el texto escrito.
// Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe
// quedar visible.

let lista = [
  "Perro",
  "Gato",
  "Pez",
  "Serpiente",
  "Tigre",
  "Leon",
  "Zebra",
  "Caballo",
  "Pajaro",
  "Guacamaya",
  "Leopardo",
  "Tarantula",
  "Cocodrilo",
  "Raton",
  "Araña",
  "Canguro",
  "Elefante",
  "Jirafa",
  "Panda",
  "Tiburón",
  "Sapo",
];

let inputTexto = document.getElementById("input-texto");
let listaDinamica = document.getElementById("lista-dinamica");

for (let elemento of lista) {
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = elemento;
  listaDinamica.append(nuevoElemento);
}

inputTexto.addEventListener("input", function () {
  let texto = inputTexto.value;
  listaDinamica.innerHTML = "";
  lista.forEach(function (elemento) {
    if (elemento.toLowerCase().includes(texto.toLowerCase())) {
      nuevoElemento = document.createElement("li");
      nuevoElemento.textContent = elemento;
      listaDinamica.append(nuevoElemento);
    }
  });
});
