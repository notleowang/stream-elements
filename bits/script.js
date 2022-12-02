const name = "{{name}}";
const userNameContainer = document.getElementById("username-container");

userNameContainer.innerHTML = getName(name);

function getName(name) {
    return `<span class="username">${name.toUpperCase()}</span>`;
}