// Task 1
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery .image"); // Беремо всі картинки
  let currentIndex = 0; // Початковий індекс

  function updateGallery() {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? "block" : "none"; // Показуємо тільки активну картинку
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length; // Перехід вперед (зациклено)
    } else if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Перехід назад (зациклено)
    }
    updateGallery();
  });

  updateGallery(); // Встановлюємо перше зображення активним
});
// Task 2
const getControls = document.querySelector("#controls");
const getInp = getControls.querySelector("input");
const getRender = getControls.querySelector("button[data-action='render']");
const getDestroy = getControls.querySelector("button[data-action='destroy']");
const getBox = document.querySelector("#boxes");

function createBoxes(amount) {
  getBox.innerHTML = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const createBox = document.createElement("div");
    const red = Math.random() * (255 - 0) + 0;
    const green = Math.random() * (255 - 0) + 0;
    const blue = Math.random() * (255 - 0) + 0;
    createBox.style.backgroundColor = `rgba(${red},${green},${blue})`;
    createBox.style.width = `${size}px`;
    createBox.style.height = `${size}px`;
    getBox.appendChild(createBox);
    size += 10;
  }
}

getRender.addEventListener("click", (event) => {
  const amount = getInp.value;
  createBoxes(amount);
});

getDestroy.addEventListener("click", (event) => {
  getBox.innerHTML = "";
});
