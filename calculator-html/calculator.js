const screen = document.querySelector(".calculator__screen");
const buttons = document.querySelectorAll(".calculator__button");
console.log("buttons", buttons);

screen.classList.add("calculator__screen--highlight");

const resizeScreen = () => {
  if (screen.innerText.length > 3) {
    screen.classList.add("calculator__screen--big");
  }

  if (screen.innerText.length > 5) {
    screen.classList.remove("calculator__screen--big");
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("button", button.innerText);
    screen.innerText = screen.innerText + button.innerText;

    resizeScreen();
  });
});
