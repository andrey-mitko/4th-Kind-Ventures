const mqDark = window.matchMedia("(prefers-color-scheme: dark)")
const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeToggleText = darkModeToggle.querySelector("span")
const menuToggle = document.querySelector("a.menu-toggle")
const menuToggleText = menuToggle.querySelector("span")

const bodyTag = document.querySelector("body");
let isDarkmodeTransitioning = false;

menuToggle.addEventListener("click", () => {
    bodyTag.classList.toggle("nav-open");
    const isNavOpen = bodyTag.classList.contains("nav-open");
    menuToggleText.innerHTML = isNavOpen ? "Close" : "Menu";

    gsap.to(".burger-top", {rotation: isNavOpen ? 45 : 0, transformOrigin: "50% 50%", y: isNavOpen ? 8 : 0})
    gsap.to(".burger-bottom", {rotation:  isNavOpen ? -45 : 0, transformOrigin: "50% 50%", y: isNavOpen ? -8 : 0})
    gsap.to(".burger-mid", {width:  isNavOpen ? 0 : 28})
})


darkModeToggle.addEventListener("click", () => {
   if (!isDarkmodeTransitioning) {
    isDarkmodeTransitioning = true;


    const isDarkMode =  bodyTag.classList.contains("dark-mode");
    darkModeToggleText.innerHTML = isDarkMode ? "Light mode" : "Dark mode";
    gsap.to("g.toggle", {x: isDarkMode ? 19 : 43})

    const timeline = gsap.timeline()
    timeline
        .set("div.wipe", {
            height: "0%",
            top: "0%",
        })
        .to("div.wipe", {
            height: "100%",
            duration: 2,
        })
        .add(() => {
            bodyTag.classList.toggle("dark-mode");
        })
        .to("div.wipe", {
            height: "0%",
            top: "100%",
            duration: 2,
        })
        .add(() => {
            isDarkmodeTransitioning = false;
        })
   }
    

});

const updateDarkMode = () => {
    const isDarkMode =  mqDark.matches;
    darkModeToggleText.innerHTML = isDarkMode ? "Light mode" : "Dark mode"
    isDarkMode ? bodyTag.classList.add("dark-mode") : bodyTag.classList.remove("dark-mode");
    gsap.to("g.toggle", {x: isDarkMode ? 43 : 19})
};

updateDarkMode();   

mqDark.addEventListener("change",  () => {
    updateDarkMode()
})

const spiralTimeline = gsap.timeline({
    repeat: -1,
});

spiralTimeline
    .set("svg.spiral rect", {
        rotation: 0,
        transformOrigin: "50% 50%",
    })
    .set("svg.spiral rect:nth-child(1)", {
        rotation: 15,
        transformOrigin: "50% 50%",
    })
    .set("svg.spiral rect:nth-child(3)", {
        rotation: -15,
        transformOrigin: "50% 50%",
    })
    .to("svg.spiral rect", {
        rotation: "+=90",
        transformOrigin: "50% 50%",
        duration: 4,
        stagger: -0.25
    })