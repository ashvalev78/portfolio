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


    const marginLeft = articles.getBoundingClientRect().left;
    const marginLeftMenu = mainMenu.getBoundingClientRect().left;

    function affixMenu() {
        if (articles.getBoundingClientRect().top < 0) {
            mainMenu.style.position = 'fixed';
            mainMenu.style.top = '0';
            mainMenu.style.marginLeft = '0px';
            mainMenu.style.left = `${marginLeftMenu}px`;
            mainMenu.style.paddingRight = getComputedStyle(articles).paddingLeft;
            articles.style.marginLeft = `${marginLeft}px`;

        } else {
            mainMenu.style.position = 'relative';
            mainMenu.style.left = `0`;
            articles.style.marginLeft = '0';
            mainMenu.style.marginLeft = `${marginLeftMenu}px`;
            mainMenu.style.paddingRight = '0'
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