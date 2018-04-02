'use strict';

var _parallax = require('./common/parallax.js');

var _parallax2 = _interopRequireDefault(_parallax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = start;

function start() {
    (0, _parallax2.default)();
}
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = parallax;
function parallax() {

    var parallaxSection = document.getElementById('parallax-section');
    var layers = parallaxSection.children;

    var move = function move(e) {
        var initialX = window.innerWidth / 2 - e.pageX;
        var initialY = window.innerHeight / 2 - e.pageY;

        Array.from(layers).forEach(function (layer, i) {
            var speed = i / 100;
            var bottomPos = window.innerHeight / 2 * k;
            var posX = initialX * k;
            var posY = initialY * k;

            layer.style.transform = 'translate3d(' + posX + 'px, ' + posY + 'px, 0)';
            layer.style.bottom = '-' + bottomPos + 'px';
        });
    };

    window.addEventListener('mousemove', move);
}
//# sourceMappingURL=all.js.map
