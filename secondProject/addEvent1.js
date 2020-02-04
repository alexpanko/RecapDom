let view = document.getElementById("view-button");
let firstText = view.innerHTML;
let close = document.getElementById("close-button");
let codey = document.getElementById("codey");

let open = () => {
  codey.style.display = "block";
  close.style.display = "block";
};

let hide = () => {
  codey.style.display = "none";
  close.style.display = "none";
};
let textChangeAndOpen = () => {
  view.innerHTML = "Hello, World!";
  open();
};
let textReturnAndHide = () => {
  view.innerHTML = firstText;
  hide();
};
view.addEventListener("click", textChangeAndOpen);
close.addEventListener("click", textReturnAndHide);
