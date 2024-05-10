import renderHomepage from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";
import renderImg from "./image";
import "./style.css";

// DOM elements
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

// Event Listeners
homeBtn.addEventListener("click", renderHomepage);
menuBtn.addEventListener("click", renderMenu);
contactBtn.addEventListener("click", renderContact);

renderImg();
renderHomepage();
