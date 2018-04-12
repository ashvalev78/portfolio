import softScroll from './softScroll'

export default function bottomArrow() {
    const arrow = document.querySelector('.arrow__back');

    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        softScroll(document.documentElement, window.innerHeight, 650);
    });
}