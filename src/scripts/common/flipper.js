function flip() {
    const authButton = document.querySelector('.hero__auth');
    const flipper = document.querySelector('.hero__flipper');
    const toMain = document.querySelector('.auth__back');

    authButton.addEventListener('click', (e) => {
        e.preventDefault();
        flipper.classList.remove('front__flipper');
        flipper.classList.add('back__flipper');
        authButton.style.display = 'none';
    });

    toMain.addEventListener('click', (e) => {
        e.preventDefault();
        flipper.classList.remove('back__flipper');
        flipper.classList.add('front__flipper');
        authButton.style.display = 'flex';
    });

    document.addEventListener('click', (e) => {
        if (!flipper.contains(e.target)) {
            if (!authButton.contains(e.target)) {
                if (flipper.classList.contains('back__flipper')) {
                    flipper.classList.remove('back__flipper');
                    flipper.classList.add('front__flipper');
                    authButton.style.display = 'flex';
                }
            }
        }
    });
}