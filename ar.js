const targetEl = document.querySelector("#butterfly");
const textEl = document.querySelector("#text");
const scanTextEl = document.querySelector("#promptToScan");
const catchTextEl = document.querySelector("#promptToCatch");
const congratsText = document.querySelector("#text");

const refObj = {};
let catched = false;

targetEl.addEventListener("click", function () {
  console.log(refObj);
  if (catched === false) {
    addToRefObj(targetEl);
    targetEl.components.animation.attrValue.enabled = true;
    catchTextEl.object3D.visible = false;
    catched = true;
    congratsText.setAttribute("value", `You caught a Butterfly!`);
    twoSecondPrompt(congratsText);
  } else {
    congratsText.setAttribute(
      "value",
      `You already caught this butterfly! Reload the page for a chance to see a different one!`
    );
    twoSecondPrompt(congratsText);
  }
});

targetEl.addEventListener("mouseenter", () => {
  scanTextEl.object3D.visible = false;
  catchTextEl.object3D.visible = true;
});

targetEl.addEventListener("mouseleave", () => {
  setTimeout(setVisibility, 2000);
  catchTextEl.object3D.visible = false;
});

const setVisibility = () => {
  if (!catchTextEl.object3D.visible) {
    scanTextEl.object3D.visible = true;
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

const twoSecondPrompt = (element) => {
  element.object3D.visible = true;
  setTimeout((event) => {
    element.object3D.visible = false;
    scanText.object3D.visible = true;
  }, 4000);
};
