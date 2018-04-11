import softScroll from './softScroll'
import getOffsetSum from './computeOffset'

export default function sideMenu() {

    // Big menu variables and stuff

    //menu variables

    const mainMenu = document.querySelector('.blog__menu');
    const mainMenuArray = Array.from(mainMenu.children);

    // articles variables

    const articles = document.querySelector('.blog__content');
    const artArray = Array.from(articles.children);
    let currentNum = 0;

    //margin variables

    const marginLeft = mainMenu.getBoundingClientRect().right;
    const marginLeftMenu = mainMenu.getBoundingClientRect().left;
    const menuDisplay = getComputedStyle(mainMenu).display;

    //to have no margin on phones

    if (menuDisplay != 'none') {
        articles.style.marginLeft = `${marginLeft}px`;
    }
    const menuTop = getComputedStyle(mainMenu).top;




    // function to find offsets from one element to the start of the window

    const offsetsArray = [];

    for (let i = 0; i < artArray.length; i++) {
        offsetsArray[i] = getOffsetSum(artArray[i]);
    }
    console.log(offsetsArray);

    //............................................................

    // Phones menu variables and stuff

    const phonesButton = document.querySelector('.phones__menu-button');
    const sideMenu = document.querySelector('.blog__menu-phones');
    const phonesBg = document.querySelector('.blog__menu-phones-bg');
    const menuElements = sideMenu.children;
    const menuArray = Array.from(menuElements);
    menuArray[currentNum].classList.add('active');

    phonesButton.style.display = 'none';


    mainMenuArray.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

           window.scrollTo(0, offsetsArray[i]);
        });
    });

    menuArray.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

           window.scrollTo(0, offsetsArray[i]);
        });
    });



    function affixMenu() {
        if (articles.getBoundingClientRect().top < 0) {
            // Main menu and articles operations

            mainMenu.style.position = 'fixed';
            mainMenu.style.top = '15px';


            // mainMenu.style.marginLeft = '0px';
            // mainMenu.style.left = `${marginLeftMenu}px`;
            // mainMenu.style.paddingRight = getComputedStyle(articles).paddingLeft;
            // articles.style.marginLeft = `${marginLeft}px`;

            //Side menu operations

            if (menuDisplay === 'none') {
                phonesButton.style.display = 'block';
            }

        } else {
            //Main menu and articles operations

            mainMenu.style.position = 'absolute';
            mainMenu.style.top = menuTop;


            // mainMenu.style.left = `0`;
            // articles.style.marginLeft = '0';
            // mainMenu.style.marginLeft = `${marginLeftMenu}px`;
            // mainMenu.style.paddingRight = '0'

            //Side menu operations
            if (!sideMenu.classList.contains('menu-opened')) {
                phonesButton.style.display = 'none';
            }
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

    phonesButton.addEventListener('click', (e) => {
        e.preventDefault();
        sideMenu.classList.toggle('menu-opened');
        phonesButton.classList.toggle('menu-opened');
        phonesBg.classList.toggle('menu-opened');
    });

    function scroll() {
        checkArticle();
        affixMenu();
    }

    window.onscroll = scroll;
}