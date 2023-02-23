const greeting = document.getElementById("greeting")
const time = new Date().getHours()
if (time < 24) greeting.innerHTML = "Good evening,"
if (time < 18) greeting.innerHTML = "Good afternoon,"
if (time < 12) greeting.innerHTML = "Good morning,"
if (time < 6) greeting.innerHTML = "Good night,"

const input = document.getElementById("nameInput")
localStorage.getItem('name') ? input.value = localStorage.getItem('name') : input.placeholder = "[Input name]"
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        localStorage.setItem('name', event.target.value)
    }
  });
  