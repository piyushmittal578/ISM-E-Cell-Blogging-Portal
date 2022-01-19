
const btn = document.querySelector(".button");
const popup = document.querySelector(".popup-wrapper");
const closee = document.querySelector(".popup-close");

btn.addEventListener("click", () => {
  popup.style.display = "block";
});

closee.addEventListener("click", () => {
  popup.style.display = "none";
})

popup.addEventListener('click', e => {
  if (e.target.className == "popup-wrapper") {
    popup.style.display = "none";
  }
})