const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";

const boton = document.querySelector(".btn");

const eventoLista = (event) => {
  alert(event.currentTarget);
};

boton.addEventListener("click", () => {
  document.querySelector("main").innerHTML += `<ul>
    <li class="inception-class">${inception}</li>
    <li class="theButterFlyEffect-class">${theButterFlyEffect}</li>
    <li class="eternalSunshineOfTheSM-class">${eternalSunshineOfTheSM}</li>
    <li class="blueVelvet-class">${blueVelvet}</li>
    <li class="split-class">${split}</li>
</ul>`;
});

const inceptionList = document.querySelector(".inception-class");
inceptionList.addEventListener("click", eventoLista);

const theButterFlyEffectList = document.querySelector(
  ".theButterFlyEffect-class"
);
theButterFlyEffectList.addEventListener("click", eventoLista);

const eternalSunshineOfTheSMList = document.querySelector(
  ".eternalSunshineOfTheSM-class"
);
eternalSunshineOfTheSMList.addEventListener("click", eventoLista);

const blueVelvetList = document.querySelector(".blueVelvet-class");
blueVelvetList.addEventListener("click", eventoLista);

const splitList = document.querySelector(".split-class");
splitList.addEventListener("click", eventoLista);
