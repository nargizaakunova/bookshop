const booksEndpoint = "./books.json";
const selectedBooks = [];

fetchBooks().then((items) => renderPage(items));

function fetchBooks() {
  return fetch(booksEndpoint).then((response) => {
    return response.json();
  });
}

function renderPage(books) {
  const fragment = new DocumentFragment();

  // insert navigation into fragment
  fragment.appendChild(createNav());
  // insert welcome catalog text into fragment
  fragment.appendChild(createWelcomeCatalog());
  // insert books catalog into fragment
  fragment.appendChild(createBooksCatalog(books));
  // insert footer into fragment
  fragment.appendChild(createFooter());

  // insert fragment
  document.body.prepend(fragment);
}

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
  shoppingCartLink.onclick = () => {
    if (isSidebarOpen()) {
      closeSidebarWindow();
    } else {
      renderSidebarWindow();
    }
  };

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

function createBooksCatalog(items) {
  // create books catalog
  const books = document.createElement("div");
  books.classList.add("books");

  const container = document.createElement("div");
  container.classList.add("container");

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
    if (!("ontouchstart" in window)) {
      showBookModal(book);
    }
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
  renderSidebarWindow();
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
  document.removeEventListener("click", sidebarCloseHandler);
}

function isSidebarOpen() {
  const sidebarWindow = document.getElementById("sidebar-window");
  if (sidebarWindow) {
    return true;
  } else {
    return false;
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
      renderSidebarWindow();
    };

    const quantityNumber = document.createElement("input");
    quantityNumber.classList.add("quantity");
    quantityNumber.min = "1";
    quantityNumber.name = "quantity";
    quantityNumber.value = quantity;
    quantityNumber.type = "number";
    quantityNumber.onchange = () => {
      if (quantityNumber.value > quantity) {
        const itemsToAdd = quantityNumber.value - quantity;
        for (let i = 0; i < itemsToAdd; i++) {
          selectedBooks.push(book);
        }
        renderSidebarWindow();
      } else if (quantityNumber.value < quantity) {
        const itemsToRemove = quantity - quantityNumber.value;
        console.log(itemsToRemove);
        let itemsRemoved = 0;
        for (let i = 0; i < selectedBooks.length; i++) {
          if (selectedBooks[i] === book) {
            selectedBooks.splice(i, 1);
            itemsRemoved++;
            i--;
          }
          if (itemsRemoved === itemsToRemove) {
            break;
          }
        }
        renderSidebarWindow();
      }
    };

    const stepUpBtn = document.createElement("button");
    stepUpBtn.classList.add("plus");
    stepUpBtn.onclick = () => {
      stepUpBtn.parentNode.querySelector("input[type=number]").stepUp();
      selectedBooks.push(book);
      updateBagQuantity();
      renderSidebarWindow();
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
      renderSidebarWindow();
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
    closeModalBtnLink.appendChild(closeModalBtnIcon);
    sidebarWindow.appendChild(closeModalBtnLink);
    sidebarWindow.appendChild(products);
  }

  const checkoutBlock = document.createElement("div");
  checkoutBlock.classList.add("checkout");

  const totalPrice = document.createElement("h3");
  let price = 0;
  for (const [book, quantity] of uniqueBooks) {
    price += book.price * quantity;
  }
  totalPrice.classList.add("total-price");
  totalPrice.innerHTML = `Total: $${price}`;

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-btn");
  orderBtn.innerText = "Order";
  orderBtn.onclick = () => {
    window.open("./form.html", "_blank");
  };
  if (price === 0) {
    orderBtn.disabled = "true";
    orderBtn.style.backgroundColor = "var(--grey-light)";
    orderBtn.style.color = "var(--grey-dark)";
    orderBtn.style.cursor = "default";
  }

  checkoutBlock.appendChild(totalPrice);
  checkoutBlock.appendChild(orderBtn);
  sidebarWindow.appendChild(checkoutBlock);

  return sidebarWindow;
}

function renderSidebarWindow() {
  const previousSidebar = document.getElementById("sidebar-window");
  if (previousSidebar) {
    previousSidebar.replaceWith(createSidebarWindow(selectedBooks));
  } else {
    document.body.appendChild(createSidebarWindow(selectedBooks));
  }
  document.addEventListener("click", sidebarCloseHandler);
}

function sidebarCloseHandler(e) {
  console.log("I was called");
  if (
    !e.target.closest(".shopping-cart") &&
    !e.target.closest("#sidebar-window") &&
    !e.target.closest(".add-to-bag")
  ) {
    closeSidebarWindow();
  }
}
