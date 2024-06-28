function closeModalReg() {
  document.querySelector(".mod-reg").style.display = "none";
  document.querySelector(".bg").style.display = "none";
  document.querySelector("body").style.overflowY = "scroll";
}
function openModalReg() {
  document.querySelector(".mod-reg").style.display = "flex";
  document.querySelector(".bg").style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}
