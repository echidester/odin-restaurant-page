const renderContact = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<p id='intro-text'>Contact Us</h2>
  <p class='content-headline'>Visit</p>
  <p>
    81 Sunday Red Lane<br />
    Augusta, GA 81155
  </p>
  <p class='content-headline'>Call</p>
  <p>(555) 555-5555</p>
  <p class='content-headline'>E-mail</p>
  <p>GreenJacketEats@FakeAugusta.com</p>`;
  contentDiv.appendChild(newDiv);
};

export default renderContact;
