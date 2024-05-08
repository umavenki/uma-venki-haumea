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
