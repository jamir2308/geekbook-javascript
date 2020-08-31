const url = "http://placehold.it/300x300";

let datosUrlUsuario =
  "https://thumbs.dreamstime.com/b/persona-casual-del-retrato-masculino-del-avatar-del-icono-del-perfil-58249506.jpg";

if (datosUrlUsuario) {
  document.querySelector(
    "div"
  ).innerHTML = `<img src="${datosUrlUsuario}" alt="usuario">
    `;
} else {
  document.querySelector("div").innerHTML = `<img src="${url}" alt="avatar">
    `;
}
