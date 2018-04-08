import flip from './common/flipper'
import menu from './common/fullMenu'
import initMap from './common/map'
import parallax from './common/parallax'
import blur from './common/blur'



function start() {
    const s = location.href;
    const name = s.substr(s.lastIndexOf("/")+1);
    if (name !== "index.html") {
        menu();
    }
    if (name === "index.html") {
        parallax();
        flip();
    }
    if (name === "about.html") {
        initMap();
    }
    if (name === "my-works.html") {
        blur();
    }
}

window.onload = start;