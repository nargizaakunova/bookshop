fetch("./books.json") //path to the file with json data
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const fragment = new DocumentFragment();
const selectedBooks = [];

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
  shoppingCartLinkSpanSmall.id = "bag-quantity";
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
  bookImg.onclick = () => {
    showBookModal(book);
  };

  const bookActions = document.createElement("div");
  bookActions.classList.add("book-actions");

  const linkShowMore = document.createElement("a");
  linkShowMore.classList.add("btn", "show-more");
  linkShowMore.href = "#";
  linkShowMore.onclick = (e) => {
    e.preventDefault();
    showBookModal(book);
  };

  const iconShowMore = document.createElement("i");
  iconShowMore.classList.add("fa", "fa-eye");

  const linkAddToBag = document.createElement("a");
  linkAddToBag.classList.add("btn", "add-to-bag");
  linkAddToBag.href = "#";
  linkAddToBag.onclick = (e) => {
    addBook(book);
    e.preventDefault();
  };

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

function addBook(book) {
  selectedBooks.push(book);
  showSidebarWindow();
  updateBagQuantity();
}

function updateBagQuantity() {
  document.getElementById("bag-quantity").innerText = `${selectedBooks.length}`;
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

function createModalWindow(contentEl) {
  // create modal window
  const modalWindow = document.createElement("div");
  modalWindow.id = "modal-window";

  const closeModalBtnLink = document.createElement("a");
  closeModalBtnLink.classList.add("close-modal-btn");
  closeModalBtnLink.onclick = (e) => {
    e.preventDefault();
    closeModal();
  };

  const closeModalBtnIcon = document.createElement("i");
  closeModalBtnIcon.classList.add("fa-solid", "fa-xmark");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.appendChild(contentEl);

  closeModalBtnLink.appendChild(closeModalBtnIcon);
  modalWindow.appendChild(closeModalBtnLink);
  modalWindow.appendChild(modalBody);
  return modalWindow;
}

function createModalBackdrop() {
  const modalBackdrop = document.createElement("div");
  modalBackdrop.id = "modal-backdrop";
  modalBackdrop.onclick = () => {
    closeModal();
  };
  return modalBackdrop;
}

function showModal(content) {
  document.body.appendChild(createModalWindow(content));
  document.body.appendChild(createModalBackdrop());
  document.body.classList.add("modal-open");
}

function showBookModal(book) {
  const content = document.createElement("div");
  content.innerText = book.description;
  showModal(content);
}

function closeModal() {
  const modalWindow = document.getElementById("modal-window");
  if (modalWindow) {
    modalWindow.remove();
  }
  const modalBackdrop = document.getElementById("modal-backdrop");
  if (modalBackdrop) {
    modalBackdrop.remove();
  }
  document.body.classList.remove("modal-open");
}

function closeSidebarWindow() {
  const sidebarWindow = document.getElementById("sidebar-window");
  if (sidebarWindow) {
    sidebarWindow.remove();
  }
}

// create sidebar for bag books
function createSidebarWindow(selectedBooks) {
  // create sidebar
  const sidebarWindow = document.createElement("div");
  sidebarWindow.id = "sidebar-window";

  const closeModalBtnLink = document.createElement("a");
  closeModalBtnLink.classList.add("close-sidebar-btn");
  closeModalBtnLink.onclick = (e) => {
    e.preventDefault();
    closeSidebarWindow();
  };

  const closeModalBtnIcon = document.createElement("i");
  closeModalBtnLink.classList.add("fa-solid", "fa-xmark");

  const products = document.createElement("div");
  products.classList.add("products");

  // grouping books
  // from: [book1, book1, book2, book3]
  // to: {
  //   book1: 2
  //   book2: 1,
  //   book3: 1
  // }
  const uniqueBooks = new Map();
  for (const selectedBook of selectedBooks) {
    if (uniqueBooks.get(selectedBook)) {
      uniqueBooks.set(selectedBook, uniqueBooks.get(selectedBook) + 1);
    } else {
      uniqueBooks.set(selectedBook, 1);
    }
  }

  for (const [book, quantity] of uniqueBooks) {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const summaryInfo = document.createElement("div");
    summaryInfo.classList.add("summary-info");

    const bookTitle = document.createElement("p");
    bookTitle.innerText = `${book.title}`;

    const authorName = document.createElement("p");
    authorName.innerText = `by ${book.author}`;

    const price = document.createElement("p");
    price.innerText = `Price: $${book.price}`;

    const numberInput = document.createElement("div");
    numberInput.classList.add("number-input");

    const stepDownBtn = document.createElement("button");
    stepDownBtn.classList.add("minus");
    stepDownBtn.onclick = () => {
      stepDownBtn.parentNode.querySelector("input[type=number]").stepDown();
      const foundBookIndex = selectedBooks.findIndex((item) => item === book);
      if (foundBookIndex !== -1) {
        selectedBooks.splice(foundBookIndex, 1);
      }
      updateBagQuantity();
    };

    const quantityNumber = document.createElement("input");
    quantityNumber.classList.add("quantity");
    quantityNumber.min = "1";
    quantityNumber.name = "quantity";
    quantityNumber.value = quantity;
    quantityNumber.type = "number";

    const stepUpBtn = document.createElement("button");
    stepUpBtn.classList.add("plus");
    stepUpBtn.onclick = () => {
      stepUpBtn.parentNode.querySelector("input[type=number]").stepUp();
      selectedBooks.push(book);
      updateBagQuantity();
    };

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.innerText = "Remove";
    removeBtn.onclick = () => {
      for (let i = 0; i < selectedBooks.length; i++) {
        if (selectedBooks[i] === book) {
          selectedBooks.splice(i, 1);
          i--;
        }
      }
      showSidebarWindow();
      updateBagQuantity();
    };

    summaryInfo.appendChild(bookTitle);
    summaryInfo.appendChild(authorName);
    summaryInfo.appendChild(price);
    summaryInfo.appendChild(numberInput);
    numberInput.appendChild(stepDownBtn);
    numberInput.appendChild(quantityNumber);
    numberInput.appendChild(stepUpBtn);
    productItem.appendChild(summaryInfo);
    productItem.appendChild(removeBtn);
    products.appendChild(productItem);
  }

  const checkoutBlock = document.createElement("div");
  checkoutBlock.classList.add("checkout");

  const totalPrice = document.createElement("h3");
  totalPrice.classList.add("total-price");
  totalPrice.innerHTML = "Total: $120";

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-btn");
  orderBtn.innerText = "Order";

  closeModalBtnLink.appendChild(closeModalBtnIcon);
  checkoutBlock.appendChild(totalPrice);
  checkoutBlock.appendChild(orderBtn);
  sidebarWindow.appendChild(closeModalBtnLink);
  sidebarWindow.appendChild(products);
  sidebarWindow.appendChild(checkoutBlock);

  return sidebarWindow;
}

function showSidebarWindow() {
  const previousSidebar = document.getElementById("sidebar-window");
  if (previousSidebar) {
    previousSidebar.remove();
  }

  document.body.appendChild(createSidebarWindow(selectedBooks));
}
