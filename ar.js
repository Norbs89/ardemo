const targetEl = document.querySelector("#butterfly");
const textEl = document.querySelector("#text");
const scanText = document.querySelector("#promptToScan");
const catchText = document.querySelector("#promptToCatch");
const congratsText = document.querySelector("#text");

const refObj = {};
let catched = false;

targetEl.addEventListener("click", function () {
  catchText.object3D.visible = false;
  fourSecondPrompt(congratsText);
  if (catched === false) {
    addToRefObj(targetEl);
    targetEl.components.animation.attrValue.enabled = true;
    catched = true;
    congratsText.setAttribute("text", "value", `You caught a Butterfly!`);
  } else {
    congratsText.setAttribute(
      "text",
      "value",
      `You already caught this butterfly! Reload the page for a chance to see a different one!`
    );
  }
});

targetEl.addEventListener("mouseenter", () => {
  scanText.object3D.visible = false;
  catchText.object3D.visible = true;
});

targetEl.addEventListener("mouseleave", () => {
  catchText.object3D.visible = false;
  setTimeout(setVisibility, 2000);
});

const setVisibility = () => {
  if (
    catchText.object3D.visible === false &&
    congratsText.object3D.visible === false
  ) {
    scanText.object3D.visible = true;
  }
};

const addToRefObj = (target) => {
  if (refObj[target.classList.value]) {
    refObj[target.classList.value] = refObj[target.classList.value] + 1 || 0;
  } else {
    refObj[target.classList.value] = 1;
  }
  return refObj;
};

const fourSecondPrompt = (element) => {
  element.object3D.visible = true;
  setTimeout((event) => {
    element.object3D.visible = false;
    if (targetEl.states[0] === "cursor-hovered") {
      catchText.object3D.visible = true;
    } else {
      scanText.object3D.visible = true;
    }
  }, 4000);
};
