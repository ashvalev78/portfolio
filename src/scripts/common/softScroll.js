import getOffsetSum from './computeOffset'


export default function softScroll(elem, posY) {

    let height = getOffsetSum(elem);
    while (height > 13) {
        setInterval(() => {
            window.scrollTo(0, 5)
            height -= 13;
        }, 13);
    }
}