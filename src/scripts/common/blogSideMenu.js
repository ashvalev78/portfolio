export default function sideMenu() {

    const sideMenu = document.querySelector('.blog__menu-phones');
    const menuElements = sideMenu.children;
    const menuArray = Array.from(menuElements);

    const mainMenu = document.querySelector('.blog__menu')
    const mainMenuArray = Array.from(mainMenu.children);

    console.log(mainMenuArray);

    const articles = document.querySelector('.blog__content');
    const artArray = Array.from(articles.children);
    let currentNum = 0;
    menuArray[currentNum].classList.add('active');

    function affixMenu() {
        if ((mainMenu.getBoundingClientRect().top < 0) 
        && articles.getBoundingClientRect().top < 0) {
            mainMenu.style.position = 'fixed';
            mainMenu.style.top = '70px';
            mainMenu.style.left = '40px';
            articles.style.marginLeft = mainMenu.getBoundingClientRect.left();
        }
    }

    function checkArticle() {
        artArray.forEach((element, i) => {
            
            if ((element.getBoundingClientRect().top - 50) <= 0) {

                // Searching the current article
                for (let k = 0; k < artArray.length; k++) {
                    // Checking articles with their top border
                    if (Math.abs(artArray[k].getBoundingClientRect().top) - 50 <= 0 ) {
                        currentNum = k;
                    }
                }
                // console.log(currentNum);
            }
        });
        // Adding active class onto side menu
        for (var j = 0; j < menuArray.length; j++) {
            menuArray[j].classList.remove('active');
            mainMenuArray[j].classList.remove('active');
        }
        menuArray[currentNum].classList.add('active');
        mainMenuArray[currentNum].classList.add('active');
    }

    function scroll() {
        checkArticle();
        affixMenu();
    }

    window.onscroll = scroll;
}