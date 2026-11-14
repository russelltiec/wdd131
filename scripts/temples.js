//Dynamic footer dates
const currentYearElement = document.querySelector("#currentyear");
const lastModifiedElement = document.querySelector("#lastModified");

currentYearElement.textContent = new Date().getFullYear();
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});