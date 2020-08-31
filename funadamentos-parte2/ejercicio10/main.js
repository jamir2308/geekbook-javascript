let horasVida = (edad) => {
  let horaDeUnAnio = 24 * 365;
  console.log(horaDeUnAnio * edad);
};
const edad = document.getElementById(edad).innerHTML;
horasVida(parseInt(edad));
