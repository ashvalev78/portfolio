export default function blur() {
    const background = document.querySelector('.reviews__bg-img');
    let bgWidth = background.width;
    let bgHeight = background.height;
    const form = document.querySelector('.callback__form');
    let formTop = form.offsetTop;
    let formLeft = form.offsetLeft;
    const bgForm = document.querySelector('.callback__bg');
    const formStyle = bgForm.style;

    formStyle.backgroundPosition = `-${formLeft}px -${formTop}px`;
    formStyle.backgroundSize = `${bgWidth}px ${bgHeight}px`;


    function RS() {
        // recounting numbers when window resizes
        bgWidth = background.width;
        bgHeight = background.height;
        formTop = form.offsetTop;
        formLeft = form.offsetLeft;


        formStyle.backgroundPosition = `- ${formTop}px - ${formLeft}px`;
        formStyle.backgroundSize = `${bgWidth}px ${bgHeight}px`;
    }



    window.onresize = RS;
}