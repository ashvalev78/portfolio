export default function flip() {
    const authButton = document.querySelector('.hero__auth');
    const flipper = document.querySelector('.hero__flipper');
    const toMain = document.querySelector('.auth__back');
    const heroDescr = document.querySelector('.hero__description');
    const flipperBack = document.querySelector('.hero__authorization');
    const flipperFront = document.querySelector('.hero__presentation');

    authButton.addEventListener('click', (e) => {
        e.preventDefault();
        flipper.classList.remove('front__flipper');
        flipper.classList.add('back__flipper');
        authButton.style.display = 'none';
        setTimeout( ()  => {
            flipperFront.style.display = 'none';
            flipper.style.backfaceVisibility = 'visible';
            flipperFront.style.backfaceVisibility = 'visible';
            flipperBack.style.backfaceVisibility = 'visible'; 
        }, 300);

    });

    toMain.addEventListener('click', (e) => {
        e.preventDefault();
        flipper.classList.remove('back__flipper');
        flipper.classList.add('front__flipper');
        authButton.style.display = 'flex';
        flipperFront.style.display = 'flex';
        flipper.style.backfaceVisibility = 'hidden';
        flipperFront.style.backfaceVisibility = 'hidden';
        flipperBack.style.backfaceVisibility = 'hidden';
    });

    document.addEventListener('click', (e) => {
        if (!heroDescr.contains(e.target)) {
            if (!authButton.contains(e.target)) {
                if (flipper.classList.contains('back__flipper')) {
                    flipper.classList.remove('back__flipper');
                    flipper.classList.add('front__flipper');
                    authButton.style.display = 'flex';
                    flipperFront.style.display = 'flex';
                    flipper.style.backfaceVisibility = 'hidden';
                    flipperFront.style.backfaceVisibility = 'hidden';
                    flipperBack.style.backfaceVisibility = 'hidden';
                }
            }
        }
    });
}