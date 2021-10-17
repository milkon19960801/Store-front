"use strict";

const URL = "https://mock-data-api.firebaseio.com/webb21/products.json";

const dataContainer = document.getElementById("dataContainer");
const totalElement = document.getElementById("totalElement");
let totalValue = 0;

const shoppingListContainer = document.getElementById("shoppingListContainer");
const shoppingListHeader = document.getElementById("shoppingListHeading");
let isShoppingListRendered = false;
let filterOn = false;

const filterButton = document.getElementById("filterButton");
const ratingInput = document.getElementById("ratingInput");
let ratingFilterValue = 0;

filterButton.addEventListener("click", function () {
  ratingFilterValue = ratingInput.value;
  ratingInput.value = "";

  filterOn = true;

  console.log("asd", ratingFilterValue);

  dataContainer.innerHTML = "";
  renderDataList(storeData);
});

let storeData = [];

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    storeData = data;
    renderDataList(storeData);
  });

function renderDataList(data) {
  for (const [, obj] of Object.entries(data)) {
    if (!filterOn) renderDataItem(obj);
    else if (filterOn) {
      console.log();
      if (+obj.rating >= +ratingFilterValue) {
        renderDataItem(obj);
      }
    }
  }
}

function renderDataItem(obj) {
  const wrapper = createWrapperElement(obj);
  dataContainer.appendChild(wrapper);
}

function addItemToShoppingList(obj) {
  const shoppingItem = document.createElement("p");
  shoppingItem.innerText = `${obj.name} - ${obj.price}`;

  if (!isShoppingListRendered) {
    shoppingListHeader.innerHTML = "Varukorg";
    shoppingListContainer.appendChild(shoppingListHeader);
    isShoppingListRendered = true;
  }

  shoppingListContainer.appendChild(shoppingItem);
}

function createNameElement(obj) {
  const name = document.createElement("h2");
  name.innerText = obj.name;

  return name;
}
function createImageElement(obj) {
  const image = document.createElement("img");

  image.src = obj.images[0].src.small;
  image.alt = obj.images[0].alt;
  image.classList.add("storeImage");

  image.addEventListener("click", () => {
    updateTotalElement(image);
    addItemToShoppingList(obj);
  });

  return image;
}
function createDescriptionElement(obj) {
  const description = document.createElement("p");
  description.innerHTML = obj.description;

  return description;
}
function createPriceElement(obj) {
  const price = document.createElement("p");
  price.innerText = `Price: ${obj.price}`;

  return price;
}
function createRatingElement(obj) {
  const rating = document.createElement("p");
  rating.innerText = `Rating: ${obj.rating}`;

  return rating;
}
function createStockElement(obj) {
  const stock = document.createElement("p");
  stock.innerText = `Stock: ${obj.stock}`;

  return stock;
}
function createBuyButton() {
  const buyButton = document.createElement("button");
  buyButton.innerText = "Köp";

  return buyButton;
}
function createWrapperElement(obj) {
  const wrapper = document.createElement("div");

  const buyButton = createBuyButton();
  buyButton.addEventListener("click", () => {
    addItemToShoppingList(obj);
  });

  wrapper.appendChild(createNameElement(obj));
  wrapper.appendChild(createImageElement(obj));
  wrapper.appendChild(createDescriptionElement(obj));
  wrapper.appendChild(createPriceElement(obj));
  wrapper.appendChild(createRatingElement(obj));
  wrapper.appendChild(createStockElement(obj));
  wrapper.appendChild(buyButton);

  return wrapper;
}

function updateTotalElement(image) {
  const element = storeData.find((ele) => {
    if (ele.images[0].alt === image.alt) return ele;
  });

  totalValue += +element?.price;
  totalElement.innerText = `Total: ${totalValue}`;
}
