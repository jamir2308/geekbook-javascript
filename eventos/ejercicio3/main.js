const texto = document.querySelector(".texto");

texto.addEventListener("mouseover", () => {
  texto.innerHTML += `<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores illum totam nobis cum
            ratione at nulla adipisci illo architecto. Harum illum debitis magnam suscipit ab voluptatibus laborum ipsum
            mollitia.
           </p>`;
});
