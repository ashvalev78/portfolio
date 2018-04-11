export default function getOffsetSum(elem) {
    let top=0;
    while(elem) {
        top = top + parseFloat(elem.offsetTop);
        elem = elem.offsetParent;
    }
        
    return top;
}