const butterfly = document.querySelector("#butterfly");
const marker1 = ["Midas", "Mother Of Pearl", "Mexican Bluewing"];

const randomiser = () => {
  return Math.floor(Math.random() * 3);
};

setTimeout(() => {
  butterfly.setAttribute(
    "gltf-model",
    `https://raw.githubusercontent.com/Norbs89/ardemo/master/butterflies/${
      marker1[randomiser()]
    }.gltf`
  );
}, 500);

setTimeout(() => {
  butterfly.classList.value = butterfly
    .getAttribute("gltf-model")
    .slice(68, -5);
}, 1500);
