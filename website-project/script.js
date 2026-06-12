const buttons = document.querySelectorAll(".btn")

const preview = document.querySelector(".preview")

const display = document.querySelector(".container")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".items")

        const image = card.querySelector("img")

         display.style.display = "block"

        preview.src = image.src;
    })
})

const close = document.querySelector(".btn-2")

close.addEventListener("click", () => {
    display.style.display = "none"
})

const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")

menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle("active")
})

const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
      navLinks.classList.remove("active")
})