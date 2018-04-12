import flip from './common/flipper'
import menu from './common/fullMenu'
import initMap from './common/map'
import parallax from './common/parallax'
import blur from './common/blur'
import sideMenu from './common/blogSideMenu'
import topArrowScroll from './common/allTopArrowsScroll'
import filledSkills from './common/filledSkills'



function start() {
    const s = location.href;
    const name = s.substr(s.lastIndexOf("/")+1);
    if (name !== "index.html") {
        menu();
        topArrowScroll();
    }
    if (name === "index.html") {
        parallax();
        flip();
    }
    if (name === "about.html") {
        filledSkills();
        initMap();
    }
    if (name === "my-works.html") {
        blur();
    }
    if (name === 'blog.html') {
        sideMenu();
    }
}

window.onload = start;