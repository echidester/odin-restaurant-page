const renderContact = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<h1>Contact Us</h1>
  <p>Visit</p>
  <p>
    81 Sunday Red Lane<br />
    Augusta, GA 81155
  </p>
  <p>Call</p>
  <p>(555) 555-5555</p>
  <p>E-mail</p>
  <p>GreenJacketEats@FakeAugusta.com</p>`;
  contentDiv.appendChild(newDiv);
};

export default renderContact;
