const name = "{{name}}";
const sender = "{{sender}}";
const userNameContainer = document.getElementById("username-container");
const senderContainer = document.getElementById("sender-container");

userNameContainer.innerHTML = getNameGift(name);
senderContainer.innerHTML = getNameUC(sender);

function getNameUC(user) {
    return `<span class="username">${user.toUpperCase()}</span>`;
}

function getNameGift(user) {
    return `<span class="gifted">${user.toUpperCase()}</span>`;
}