let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainnav").style.top = "0";
    } else {
        document.getElementById("mainnav").style.top = "-55px";
    }
    prevScrollpos = currentScrollPos;
}
