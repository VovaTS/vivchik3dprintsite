let toggle = document.querySelector("#themetoggle")
function ThemeToggle(){
    document.querySelector("body").classList.toggle("dark")
    toggle.classList.toggle("active")
}
toggle.addEventListener("click", ThemeToggle)

