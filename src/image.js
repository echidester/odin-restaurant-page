import Img from "./golf-course.jpg";

function renderImg() {
  const heroDiv = document.querySelector("#hero-container");

  // Create Image element
  const myImg = new Image();
  myImg.src = Img;

  // Create Image Headline element
  const headline = document.createElement("h2");
  headline.textContent = `Palmers Provisions`;

  // Set ids for image & headline
  myImg.setAttribute("id", "hero-img");
  headline.setAttribute("id", "img-headline");

  // Append image & headline to hero container
  heroDiv.appendChild(myImg);
  heroDiv.appendChild(headline);

  return heroDiv;
}

export default renderImg;
