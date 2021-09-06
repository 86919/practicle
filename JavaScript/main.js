const showName = document.getElementById("nameOfUser");
const gotGreeting = document.getElementById("gotGreeting");
const mainContainer = document.getElementById("main-container");
const deleteDiv = document.getElementById("deleteDiv");
const removedText = document.getElementById("removedText");

function sayHello() {
    const gotGreet = alert("Hello, User!");
    gotGreeting.innerHTML = `The user got greeting..... <b>YUP!</b>`;
    gotGreeting.style.cssText += 'display:block;'
}

function takeName() {
    const nameOfPlayer = prompt("Get you name!");   
    console.log("The name of the player is " + nameOfPlayer);
    showName.innerHTML = `The name of the user is <b>${nameOfPlayer}</b>`;
    showName.style.cssText += 'display:block;';
}

deleteDiv.addEventListener("click", () => {
    mainContainer.style.cssText += 'display:none;';
    removedText.style.display = 'block';
});