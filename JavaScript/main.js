const showName = document.getElementById("nameOfUser");
const gotGreeting = document.getElementById("gotGreeting");
const mainContainer = document.getElementById("main-container");
const deleteDiv = document.getElementById("deleteDiv");

function sayHello() {
    const gotGreet = alert("Hello, User!");
    gotGreeting.innerHTML = `The user got greeting..... <b>YUP!</b>`;
}

function takeName() {
    const nameOfPlayer = prompt("Get you name!");   
    console.log("The name of the player is " + nameOfPlayer);
    showName.innerHTML = `The name of the user is <b>${nameOfPlayer}</b>`;
}

deleteDiv.addEventListener("click", () => (
    mainContainer.style.cssText += 'display:none;'
));