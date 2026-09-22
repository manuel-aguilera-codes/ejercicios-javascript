/*Crea una aplicación de lista de tareas.
• Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
• Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
• Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage. */

const botonAgregar = document.getElementById("boton-agregar");
const botonBorrar = document.getElementById("boton-borrar");
const lista = document.getElementById("lista-tareas");
let arrayTareas = [];      // Array de objetos con dos pares: textoTarea:descripcion y completada:true/false

if (localStorage.getItem("tareas")) {
    arrayTareas = JSON.parse(localStorage.getItem("tareas"));
    renderTareas();
}

function renderTareas() {
    lista.innerHTML = "";
    arrayTareas.forEach((tarea) => {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarea.completada;
        checkbox.dataset.id = tarea.id;
        const textoTarea = document.createTextNode(tarea.textoTarea);
        listItem.appendChild(checkbox);
        listItem.appendChild(textoTarea);
        lista.appendChild(listItem);
    });
}

botonAgregar.addEventListener("click", agregarTarea);

function agregarTarea() {
    const texto = prompt("Introduce la tarea:");
    if (texto) {
        let nuevaTarea = { id: Date.now(), textoTarea: texto, completada: false };
        arrayTareas.push(nuevaTarea);

        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.id = nuevaTarea.id;
        const textoTarea = document.createTextNode(texto);
        listItem.appendChild(checkbox);
        listItem.appendChild(textoTarea);
        lista.appendChild(listItem);

    }
    actualizarLocalStorage();
}

lista.addEventListener("change", (event) => {
    if (event.target.type === "checkbox") {
        let id = Number(event.target.dataset.id);
        let tarea = arrayTareas.find((tarea) => {
            return tarea.id === id;
        });
        tarea.completada = event.target.checked;
        actualizarLocalStorage();
    }
})

botonBorrar.addEventListener('click', borrarCompletadas);

function borrarCompletadas() {
    arrayTareas = arrayTareas.filter((tarea) => {
        return tarea.completada === false
    })
    renderTareas();
    actualizarLocalStorage();
}

function actualizarLocalStorage() {
    localStorage.setItem("tareas", JSON.stringify(arrayTareas));
}

