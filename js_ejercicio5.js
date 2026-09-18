// Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar", "Multiplicar", y "Dividir".
// - Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones.
// - Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías).

let numero1 = document.getElementById("input-numero1");
let numero2 = document.getElementById("input-numero2");
let botonSumar = document.getElementById("boton-sumar");
let botonRestar = document.getElementById("boton-restar");
let botonMultiplicar = document.getElementById("boton-multiplicar");
let botonDividir = document.getElementById("boton-dividir");
let resultadoNumero = 0;
let resultado = document.getElementById("resultado");

botonSumar.addEventListener("click", function () {
  resultadoNumero = parseInt(numero1.value) + parseInt(numero2.value);
  resultado.textContent = resultadoNumero;
  console.log("resultado:" + resultadoNumero);
});

botonRestar.addEventListener("click", function () {
  resultado.textContent = numero1.value - numero2.value;
});

botonMultiplicar.addEventListener("click", function () {
  resultado.textContent = numero1.value * numero2.value;
});

botonDividir.addEventListener("click", function () {
  if (numero2.value === "0") {
    resultado.textContent = "Error: División por cero";
  } else {
    resultado.textContent = numero1.value / numero2.value;
  }
});
