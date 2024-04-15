// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

const blueText = document.createElement("h3");
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style","border-color: black; border-style: solid; background: pink;");
const lastH1 = document.createElement("h1");
lastH1.textContent = "I'm in a div";
const lastP = document.createElement("P");
lastP.textContent = "ME TOO!";

pinkDiv.append(lastH1, lastP);

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText);
container.appendChild(pinkDiv);

/*
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/