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
