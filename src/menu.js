const renderMenu = () => {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<p id='intro-text'>Menu</h2>
  <p class='content-headline'>Sandwiches</p>
  <ul>
    <li>Egg Salad - $1.50</li>
    <li>Pimento Cheese - $1.50</li>
    <li>Pork Bar-B-Que - $3.00</li>
    <li>Masters Club - $3.00</li>
    <li>Chicken Salad on Honey Wheat - $3.00</li>
    <li>Ham & Cheese on Rye - $3.00</li>
    <li>Classic Chicken - $3.00</li>
  </ul>
  <p class='content-headline'>Breakfast, Served until 10 a.m.</p>
  <ul>
    <li>Masters Blend Fresh Brewed Coffee - $2.00</li>
    <li>Chicken Biscuit - $3.00</li>
    <li>Breakfast Sandwich - $3.00</li>
    <li>Blueberry Muffin - $2.00</li>
    <li>Fresh Mixed Fruit - $2.00</li>
  </ul>
  <p class='content-headline'>Beverages</p>
  <ul>
    <li>Soft Drinks - $2.00</li>
    <li>Bottled Water - $2.00</li>
    <li>Fresh Brewed Iced Tea - $2.00</li>
    <li>Crow's Nest - $6.00</li>
    <li>Domestic Beer - $6.00</li>
    <li>Import Beer - $6.00</li>
    <li>White Wine - $6.00</li>
  </ul>
  <p class='content-headline'>Snacks</p>
  <ul>
    <li>Chips-Plain & BBQ - $1.50</li>
    <li>Peanuts - $1.50</li>
    <li>Southern Cheese Straws - $2.00</li>
    <li>Cookies - $1.50</li>
    <li>Georgia Pecan Caramel Popcorn - $2.00</li>
    <li>Georgia Peach Ice Cream Sandwich - $3.00</li>
  </ul>`;
  contentDiv.appendChild(newDiv);
};

export default renderMenu;
