const leads = document.querySelector(".lead-list")

const listItem = document.createElement("li")

const user = localStorage.getItem("user")
const gmail = localStorage.getItem("gmail")
const message = localStorage.getItem("message")

leads.appendChild(listItem)

listItem.textContent = `Username: ${user} Email: ${gmail}  Message: ${message}`