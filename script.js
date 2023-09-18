"use strick";

const panels = document.querySelectorAll(".panel");

const removeActiveClases = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClases();
    panel.classList.add("active");
  });
});
