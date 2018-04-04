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
    var heroDescr = document.querySelector('.hero__description');

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
        if (!heroDescr.contains(e.target)) {
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

function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 59.846688, lng: 30.229678 },
    zoom: 12,
    styles: [{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] }, { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] }, {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    }, {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }]
    }, {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }]
    }, {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#FFFFFF' }]
    }, {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#FFFFFF' }]
    }, {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#FFFFFF' }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: 'grey' }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: 'grey' }]
    }, {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: 'grey' }]
    }, {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: 'grey' }]
    }, {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: 'grey' }]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#61dac9' }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#61dac9' }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#61dac9' }]
    }]
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
