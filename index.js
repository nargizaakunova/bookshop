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
// insert welcome catalog text into fragment
fragment.appendChild(createWelcomeCatalog());
// insert books catalog into fragment
fragment.appendChild(createBooksCatalog());
// insert footer into fragment
fragment.appendChild(createFooter());

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

function createBooksCatalog() {
  // create books catalog
  const books = document.createElement("div");
  books.classList.add("books");

  const container = document.createElement("div");
  container.classList.add("container");

  const items = [
    {
      author: "Douglas Crockford",
      imageLink: "./images/book1.jpg",
      title: "JavaScript: The Good Parts: The Good Parts",
      price: 30,
      description:
        "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must",
    },
    {
      author: "David Herman",
      imageLink: "./images/book2.jpg",
      title:
        "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      price: 22,
      description:
        "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency",
    },
    {
      author: "David Flanagan",
      imageLink: "./images/book3.jpg",
      title: "JavaScript: The Definitive Guide",
      price: 40,
      description:
        "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript",
    },
    {
      author: " Eric Elliott",
      imageLink: "./images/book4.jpg",
      title: "Programming JavaScript Applications",
      price: 19,
      description:
        "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows.",
    },
    {
      author: "Addy Osmani",
      imageLink: "./images/book5.jpg",
      title: "Learning JavaScript Design Patterns",
      price: 32,
      description:
        "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    },
    {
      author: "Boris Cherny",
      imageLink: "./images/book6.jpg",
      title: "Programming TypeScript",
      price: 28,
      description:
        "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system.",
    },
    {
      author: "Alex Banks, Eve Porcello",
      imageLink: "./images/book7.jpg",
      title: "Learning React, 2nd Edition",
      price: 25,
      description:
        "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary.",
    },
    {
      author: "Bradley Meck Alex Young and Mike Cantelon",
      imageLink: "./images/book8.jpg",
      title: "Node.js in Action",
      price: 38,
      description:
        "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications.",
    },
    {
      author: "Kyle Simpson",
      imageLink: "./images/book9.jpg",
      title: "You Don't Know JS Yet: Get Started",
      price: 26,
      description:
        "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!",
    },
    {
      author: "John Resig and Bear Bibeault",
      imageLink: "./images/book10.jpg",
      title: "Secrets of the JavaScript Ninja",
      price: 33,
      description:
        "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up.",
    },
  ];

  for (let item of items) {
    container.appendChild(createBookElement(item));
  }

  books.appendChild(container);

  return books;
}

function createBookElement(book) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("book");

  // build book image
  const bookImgContainer = document.createElement("div");
  bookImgContainer.classList.add("book-img");

  const bookImg = document.createElement("img");
  bookImg.src = book.imageLink;

  const bookActions = document.createElement("div");
  bookActions.classList.add("book-actions");

  const linkShowMore = document.createElement("a");
  linkShowMore.classList.add("btn", "show-more");
  linkShowMore.href = "#";

  const iconShowMore = document.createElement("i");
  iconShowMore.classList.add("fa", "fa-eye");

  const linkAddToBag = document.createElement("a");
  linkAddToBag.classList.add("btn", "add-to-bag");
  linkAddToBag.href = "#";

  const iconAddToBag = document.createElement("i");
  iconAddToBag.classList.add("fa-solid", "fa-shopping-cart");

  linkAddToBag.appendChild(iconAddToBag);
  linkShowMore.appendChild(iconShowMore);
  bookActions.appendChild(linkAddToBag);
  bookActions.appendChild(linkShowMore);
  bookImgContainer.appendChild(bookActions);
  bookImgContainer.appendChild(bookImg);
  wrapper.appendChild(bookImgContainer);

  // build book info
  const bookInfo = document.createElement("div");
  bookInfo.classList.add("book-info");

  const authorName = document.createElement("h2");
  authorName.innerText = book.author;

  const bookTitle = document.createElement("p");
  bookTitle.innerText = book.title;

  const price = document.createElement("p");
  price.innerText = `Price: $${book.price}`;

  bookInfo.appendChild(authorName);
  bookInfo.appendChild(bookTitle);
  bookInfo.appendChild(price);
  wrapper.appendChild(bookInfo);

  return wrapper;
}

function createFooter() {
  // create footer
  const footerEl = document.createElement("footer");

  const container = document.createElement("div");
  container.classList.add("container");

  const navLogo = document.createElement("div");
  navLogo.id = "nav-logo";

  const navLogoLink = document.createElement("a");
  navLogoLink.href = "./index.html";
  navLogoLink.innerText = "BOOKSHOP";

  navLogo.appendChild(navLogoLink);
  container.appendChild(navLogo);
  footerEl.appendChild(container);

  return footerEl;
}
