const contenido = document.querySelector(".contenido");
let h1 = document.getElementById("notificacion");
let parrafo = document.getElementById("mensaje");

// if (contenido.classList.contains("warning")) {
//   h1.innerHTML = "AVISO";
//   parrafo.innerHTML = "Tenga cuidado";
// } else if (contenido.classList.contains("error")) {
//   h1.innerHTML = "Ha surgido un error";
//   parrafo.innerHTML = "Tenga cuidado";
// } else if (contenido.classList.contains("success")) {
//   h1.innerHTML = "CORRECTO";
//   parrafo.innerHTML = "Los datos son correctos";
// }else {
//   console.log("clase por defecto");
// }

contenido.classList.contains("warning")
  ? ((h1.innerHTML = "AVISO"), (parrafo.innerHTML = "Tenga cuidado"))
  : contenido.classList.contains("warning")
  ? ((h1.innerHTML = "AVISO"), (parrafo.innerHTML = "Tenga cuidado"))
  : contenido.classList.contains("warning")
  ? ((h1.innerHTML = "AVISO"), (parrafo.innerHTML = "Tenga cuidado"))
  : console.log("clase por defecto");
