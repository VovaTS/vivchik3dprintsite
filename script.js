let toggle = document.querySelector("#themetoggle")
function ThemeToggle(){
    document.querySelector("body").classList.toggle("dark")
    toggle.classList.toggle("active")
}
toggle.addEventListener("click", ThemeToggle)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
ThemeToggle()    // dark mode
}

let x = 51
// if (x==50){
// console.log(".")
// }
// else {
//     console.log("..")
// }
console.log(x==51)