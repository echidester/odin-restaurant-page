import renderHomepage from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

// DOM elements
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const contactBtn = document.getElementById("contactBtn");

// Event Listeners
homeBtn.addEventListener("click", renderHomepage);
menuBtn.addEventListener("click", renderMenu);
contactBtn.addEventListener("click", renderContact);

renderHomepage();
