let myButton = document.querySelector("button");

const handleClick = index => {
  let audio = new Audio(`./sounds/tom-${index}.mp3`);
  audio.play();
};
const addBackground = button => {
  button.classList.add("pressed");
};
const removeBackground = button => {
  button.classList.remove("pressed");
};

document.querySelectorAll(".letter").forEach((button, index) => {
  button.addEventListener("click", () => handleClick(index));
  button.addEventListener("mousedown", () => addBackground(button));
  button.addEventListener("mouseup", () => removeBackground(button));
});
