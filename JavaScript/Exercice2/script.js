var menuActive = 0;
const btn = document.querySelector("#menuBtn");
btn.addEventListener("click", () => {
    if (menuActive) {
        menuActive = 0;
        document.querySelector('.menu').style.marginLeft = "-200px";
    } else {
        menuActive = 1;
        document.querySelector('.menu').style.marginLeft = "0";
    }
});