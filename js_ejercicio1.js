function crearColorAleatorio() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let randomColor = `rgb(${red}, ${green}, ${blue})`;
  return randomColor;
}

function cambiarColor() {
  let color = crearColorAleatorio();
  document.body.style.backgroundColor = color;
}

document.getElementById("boton-color").addEventListener("click", cambiarColor);
