const menu = document.querySelector('.menu');
const navul = document.querySelector('.navegation ul');

menu.addEventListener('click', () => {
    navul.classList.toggle('active');
    menu.classList.toggle('active');
});