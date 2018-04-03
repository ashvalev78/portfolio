function parallax() {

    const parallaxSection = document.getElementById('parallax-section');
    const layers = parallaxSection.children;

    const move = (e) => {
        const initialX = window.innerWidth / 2 - e.pageX;
        const initialY = window.innerHeight / 2 - e.pageY;

        Array.from(layers).forEach((layer, i) => {
            const speed = i/100;
            const bottomPos = window.innerHeight / 2 * speed;
            const posX = initialX * speed;
            const posY = initialY * speed;

            layer.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
            layer.style.bottom = `-${bottomPos}px`;
        })
    }

    window.addEventListener('mousemove', move);
}

window.onload = start;