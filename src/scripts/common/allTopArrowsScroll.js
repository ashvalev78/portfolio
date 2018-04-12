import softScroll from './softScroll'

export default function topArrowScroll() {
    const arrowDown = document.querySelector('.arrow__down-href');

    arrowDown.addEventListener('click', (e) => {
        e.preventDefault();
        softScroll(document.documentElement, window.innerHeight, 650);
    });
}