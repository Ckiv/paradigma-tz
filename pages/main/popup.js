const POPUP = document.querySelector(".popup");
const OPENPOPUP = document.querySelector(".header-bottom-phone__button");
const CLOSEPOPUP = document.querySelector(".close-popup");

OPENPOPUP.addEventListener("click", openPopup);
CLOSEPOPUP.addEventListener("click", closePopup);
function openPopup() {
    POPUP.classList.add("show-popup");
}
function closePopup() {
    POPUP.classList.remove("show-popup");
}
