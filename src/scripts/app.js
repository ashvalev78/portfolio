import flip from './common/flipper'
import menu from './common/fullMenu'
import initMap from './common/map'
import parallax from './common/parallax'



function start() {
    parallax();
    flip();
    initMap();
    menu();
}

window.onload = start;