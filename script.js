let toggle = document.querySelector("#themetoggle")
function ThemeToggle(){
    document.querySelector("body").classList.toggle("dark")
    toggle.classList.toggle("active")
}
toggle.addEventListener("click", ThemeToggle)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
ThemeToggle()    // dark mode
}

let sendb = document.querySelector("#sendbutton")
sendb.addEventListener("click", async function(e){
    e.preventDefault()
    let name = document.querySelector("#username")
    let number = document.querySelector("#phonenumber")
    let textarea = document.querySelector("#userwish")
    let token = "6036086539:AAFPhEDtOxxFv5gdjEl0g_mw6eSE7k557is"
    let id = "2092827728"
    let data =` 
    Новый Заказ:%0A
    Имя: ${name.value}%0A
    Номер: ${number.value}%0A
    Пожелание: ${textarea.value}%0A
    `
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${id}&text=${data}`
    let response = await fetch(url)
    let result = await response.json()
    console.log(result)
})