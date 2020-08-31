const ticketConIva = (val1) => {
  let iva = val1 * 0.21;
  console.log(`Precio sin iva: ${val1}, con Iva:${iva},Total:${val1 + iva}`);
};

ticketConIva(100000);
