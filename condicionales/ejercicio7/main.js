const year = 2022;

const bisiesto =
  anioActual % 4 == 0
    ? console.log("estas en un año bisiesto")
    : console.log(`El proximo año es el: ${anioActual + 4 - (anioActual % 4)}`);
