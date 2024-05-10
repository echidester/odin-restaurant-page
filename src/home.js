const renderHomepage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
          <div id='intro-container'>
          <p id='intro-text'>
            Southern fare. Augusta prices.
          </p>
          </div>
          <div id='info-container'>
          <p class='content-headline'>Hours</p>
          <ul id='hours-list'>
            <li>Thursday: 7:30am - 7:30pm</li>
            <li>Friday: 7:30am - 7:30pm</li>
            <li>Saturday: 7:30am - 7:30pm</li>
            <li>Sunday: 7:30am - 7:30pm</li>
          </ul>
          <p class='content-headline'>Location</p>
          <p id='address'>
            81 Sunday Red Lane<br />
            Augusta, GA 81155
          </p></div>`;
  contentDiv.appendChild(newDiv);
};

export default renderHomepage;
