const mqDark = window.matchMedia("(prefers-color-scheme: dark)")
const darkModeToggle = document.querySelector("a.dark-mode-toggle")
const darkModeToggleText = darkModeToggle.querySelector("span")


const updateDarkMode = () => {
    darkModeToggleText.innerHTML = mqDark.matches ? "Light mode" : "Dark mode"
};

updateDarkMode();   

mqDark.addEventListener("change",  () => {
    updateDarkMode()
})