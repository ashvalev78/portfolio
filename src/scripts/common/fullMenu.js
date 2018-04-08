export default function menu() {
    
    const burger = document.querySelector('.hamburger-href');
    const menu = document.querySelector('.header__menu-block');
    const closeButton = document.querySelector('.header__back');
    const body = document.querySelector('body');

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.add('active');
        burger.style.display = 'none';
        body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', (e) => {
        burger.style.display = 'block';
        menu.classList.remove('active');
        body.style.overflow = 'visible';

    });
}