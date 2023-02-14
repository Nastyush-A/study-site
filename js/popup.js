let buttonEnter = document.querySelector('.button-enter');
let popup = document.querySelector('.popup');
buttonEnter.addEventListener('click', showPopup)
function showPopup(evt) {
    evt.preventDefault();
    popup.classList.toggle('show-popup')
};