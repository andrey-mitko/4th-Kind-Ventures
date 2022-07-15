const mqDark = window.matchMedia("(prefers-color-scheme: dark)")
const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeToggleText = darkModeToggle.querySelector("span")
const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector("span")

const bodyTag = document.querySelector("body");

menuToggle.addEventListener("click", () => {
    bodyTag.classList.toggle("nav-open");
    const isNavOpen = bodyTag.classList.contains("nav-open");
    menuToggleText.innerHTML = isNavOpen ? "Close" : "Menu";

    gsap.to(".burger-top", {rotation: isNavOpen ? 45 : 0, transformOrigin: "50% 50%", y: isNavOpen ? 8 : 0})
    gsap.to(".burger-bottom", {rotation:  isNavOpen ? -45 : 0, transformOrigin: "50% 50%", y: isNavOpen ? -8 : 0})
    gsap.to(".burger-mid", {width:  isNavOpen ? 0 : 28})
})


darkModeToggle.addEventListener("click", () => {
    bodyTag.classList.toggle("dark-mode");
    darkModeToggleText.innerHTML = bodyTag.classList.contains("dark-mode") ? "Light mode" : "Dark mode";
});

const updateDarkMode = () => {
    darkModeToggleText.innerHTML = mqDark.matches ? "Light mode" : "Dark mode"
    mqDark.matches ? bodyTag.classList.add("dark-mode") : bodyTag.classList.remove("dark-mode");
};

updateDarkMode();   

mqDark.addEventListener("change",  () => {
    updateDarkMode()
})