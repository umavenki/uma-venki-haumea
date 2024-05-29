const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Uma Venki &#x00A9;${thisYear}</small>`;

footer.appendChild(copyright);
document.body.appendChild(footer);

let skills = ["JavaScript", "HTML", "CSS"];
let skillSection = document.getElementById("skills");
let skillsList = document.createElement("ul");
skillSection.appendChild(skillsList);

for (let skill of skills) {
  let skillItem = document.createElement("li");
  skillItem.innerText = skill;
  skillsList.appendChild(skillItem);
}

const messageForm = document.querySelector("[name='leave_message']");

//messageForm.addEventListener()callback

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const usersName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log(usersName);
  console.log(userEmail);
  console.log(usersMessage);

  //HTML element contains new message (<ul></ul>)
  const messageSection = document.querySelector("#messages-section");
  console.log(messageSection);
  const messageList = messageSection.querySelector("ul");
  console.log(messageList);

  //Creating new message element(<li></li>)
  const newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href=mailto:${usersEmail}>${usersName}</a>
  <span>${usersMessage}</span>`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function (event) {
    const entry = event.target.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  messageForm.reset();
});

const projectsSection = document.querySelector("#projects");
const projectsList = projectsSection.querySelector("ul");

fetch("https://api.github.com/users/umavenki/repos")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("Invalid request");
    }
    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const project = document.createElement("li");
      project.innerText = data[i].name;
      projectsList.appendChild(project);
    }
  })
  .catch((error) => {
    const errorElement = document.createElement("p");
    errorElement.innerText = error.message;
    projectsSection.appendChild(errorElement);
  });

// Get the button and the mobile nav menu
const header = document.querySelector("header");
const navbar = header.querySelector("nav");
const mobileMenuBtn = header.querySelector("#mobile-menu-button");
const openMobileMenuIcon = header.querySelector("#open-mobile-menu-icon");
const closeMobileMenuIcon = header.querySelector("#close-mobile-menu-icon");
const navLinks = navbar.querySelectorAll("a");

mobileMenuBtn.addEventListener("click", () => {
  if (navbar.classList.contains("mobile-hidden")) {
    // Show the mobile nav menu
    navbar.classList.remove("mobile-hidden");
    openMobileMenuIcon.classList.add("hidden");
    closeMobileMenuIcon.classList.remove("hidden");
  } else {
    // Hide the mobile nav menu
    navbar.classList.add("mobile-hidden");
    closeMobileMenuIcon.classList.add("hidden");
    openMobileMenuIcon.classList.remove("hidden");
  }
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Hide the mobile nav menu
    navbar.classList.add("mobile-hidden");
    closeMobileMenuIcon.classList.add("hidden");
    openMobileMenuIcon.classList.remove("hidden");
  });
});
