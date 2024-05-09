const renderHomepage = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<h1>Palmer's Provisions</h1>
          <p>
            For the patrons who want to watch golf and eat a tasty Augusta-style
            meal.
          </p>
          <p>Hours</p>
          <ul>
            <li>Thursday: 7:30am - 7:30pm</li>
            <li>Friday: 7:30am - 7:30pm</li>
            <li>Saturday: 7:30am - 7:30pm</li>
            <li>Sunday: 7:30am - 7:30pm</li>
          </ul>
          <p>Location</p>
          <p>
            81 Sunday Red<br />
            Augusta, GA 81155
          </p>`;
  contentDiv.appendChild(newDiv);
};

export default renderHomepage;
