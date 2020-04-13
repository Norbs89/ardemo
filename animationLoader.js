const butterfly = document.querySelector("#butterfly");

const randomiser = () => {
  return Math.floor(Math.random() * 15) + 1;
};

const thisValue = "butterfly.components.gltf-model.attrValue";
setTimeout(() => {
  butterfly.setAttribute(
    "gltf-model",
    `./butterflies/butterfly${randomiser()}.gltf`
  );
}, 500);

setTimeout(() => {
  butterfly.classList.value = butterfly
    .getAttribute("gltf-model")
    .slice(14, -5);
}, 1500);
