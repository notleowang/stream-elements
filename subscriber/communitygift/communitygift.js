const sender = "cheillie";
const senderContainer = document.getElementById("sender-container");

senderContainer.innerHTML = getNameUC(sender);

function getNameUC(user) {
    return `<span class="username">${user.toUpperCase()}</span>`;
}

function getName(user) {
    return `<span class="username">${user}</span>`;
}