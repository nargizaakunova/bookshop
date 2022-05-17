fetch("./books.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const fragment = new DocumentFragment();

// insert navigation into fragment
fragment.appendChild(createNav());
// insert product description into fragment
fragment.appendChild(createWelcomeCatalog());

// insert fragment
document.body.prepend(fragment);

function createNav() {
  // create navigation
  const navigation = document.createElement("nav");
  navigation.classList.add("nav");

  const container = document.createElement("div");
  container.classList.add("container");

  const navLogo = document.createElement("div");
  navLogo.id = "nav-logo";

  const navLogoLink = document.createElement("a");
  navLogoLink.href = "./index.html";
  navLogoLink.innerText = "BOOKSHOP";

  const shoppingCart = document.createElement("div");
  shoppingCart.classList.add("shopping-cart");

  const shoppingCartLink = document.createElement("a");
  shoppingCartLink.classList.add("cart");
  shoppingCartLink.href = "#";

  const shoppingCartLinkSpan = document.createElement("span");

  const shoppingCartLinkSpanSmall = document.createElement("small");
  shoppingCartLinkSpanSmall.innerText = "0";

  const shoppingCartLinkSpanIcon = document.createElement("i");
  shoppingCartLinkSpanIcon.classList.add("fa-solid", "fa-shopping-cart");

  shoppingCartLinkSpan.appendChild(shoppingCartLinkSpanSmall);
  shoppingCartLinkSpan.appendChild(shoppingCartLinkSpanIcon);
  shoppingCartLink.appendChild(shoppingCartLinkSpan);
  shoppingCart.appendChild(shoppingCartLink);

  navLogo.appendChild(navLogoLink);
  container.appendChild(navLogo);
  container.appendChild(shoppingCart);
  navigation.appendChild(container);

  return navigation;
}

function createWelcomeCatalog() {
  // create welcome catalog title
  const welcomeCatalog = document.createElement("div");
  welcomeCatalog.classList.add("welcome-catalog");

  const container = document.createElement("div");
  container.classList.add("container");

  const span = document.createElement("span");
  span.innerText = "Welcome to amazing book shop!";

  const heading = document.createElement("h1");
  heading.innerText = "Book catalog";

  const paragraph = document.createElement("p");
  paragraph.innerText =
    "We ship your books from our wholesaler's warehouse directly to you,\
  handle the customer service and overhead.";

  container.appendChild(span);
  container.appendChild(heading);
  container.appendChild(paragraph);
  welcomeCatalog.appendChild(container);

  return welcomeCatalog;
}
