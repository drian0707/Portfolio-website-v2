document.addEventListener("DOMContentLoaded", () => {
      const error = document.querySelector(".error")
      const button = document.querySelector(".btn-2")

      button.addEventListener("click", function() {
            pushText()
      })

      function pushText() {
      const name = document.querySelector(".name").value.trim()
      const gmail = document.querySelector(".gmail").value.trim()
      const message = document.querySelector(".message").value.trim();
            if ( name, gmail, message === '') {
           error.textContent = "fill all fields!"
           error.style.color = "red"
      } else if (name.length < 3) {
            error.textContent = "The Name should be at least 3 characters!";
            error.style.color = "yellow"
      } else {
            localStorage.setItem("name", name);
            localStorage.setItem("gmail", gmail)
            localStorage.setItem("message", message)
            
            error.textContent = "Message Sent!"
            error.style.color = "green"

            name.value === '';
            gmail.value === '';
            message.value === '';

      }
      }
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