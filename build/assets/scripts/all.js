"use strict";

function start() {
    parallax();
    flip();
}
'use strict';

function flip() {
    var authButton = document.querySelector('.hero__auth');
    var flipper = document.querySelector('.hero__flipper');
    var toMain = document.querySelector('.auth__back');

    authButton.addEventListener('click', function (e) {
        e.preventDefault();
        flipper.classList.remove('front__flipper');
        flipper.classList.add('back__flipper');
        authButton.style.display = 'none';
    });

    toMain.addEventListener('click', function (e) {
        e.preventDefault();
        flipper.classList.remove('back__flipper');
        flipper.classList.add('front__flipper');
        authButton.style.display = 'flex';
    });

    document.addEventListener('click', function (e) {
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
'use strict';

function parallax() {

    var parallaxSection = document.getElementById('parallax-section');
    var layers = parallaxSection.children;

    var move = function move(e) {
        var initialX = window.innerWidth / 2 - e.pageX;
        var initialY = window.innerHeight / 2 - e.pageY;

        Array.from(layers).forEach(function (layer, i) {
            var speed = i / 100;
            var bottomPos = window.innerHeight / 2 * speed;
            var posX = initialX * speed;
            var posY = initialY * speed;

            layer.style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0)';
            layer.style.bottom = '-' + bottomPos + 'px';
        });
    };

    window.addEventListener('mousemove', move);
}

window.onload = start;
//# sourceMappingURL=all.js.map
