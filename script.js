window.addEventListener("load", function () {
  firstItemInit();
  secondItemInit();
});

// Plus Item Function
function addItem(quantityInput) {
  let getQuantity = document.getElementById(quantityInput);
  let currentQuantity = parseFloat(getQuantity.value);
  getQuantity.innerText = currentQuantity;
  getQuantity.value++;
}
// Minus Item Function
function minusItem(quantityInput, removeElement) {
  let getQuantity = document.getElementById(quantityInput);
  let currentQuantity = parseFloat(getQuantity.value);
  getQuantity.innerText = currentQuantity;
  getQuantity.value--;
}

// Clear State
function clearState(Itemcount) {
  document.getElementById(Itemcount).value = 0;
  updatePrice();
}

// Price and Checkout
function updatePrice() {
  // Item One
  let itemOnePrice = parseFloat(
    document.getElementById("product-price").innerText
  );
  let itemOneQty = parseFloat(document.getElementById("itemCount").value);
  let itemOneSum = itemOnePrice * itemOneQty;
  // Item Two
  let itemTwoPrice = parseFloat(
    document.getElementById("second-product-price").innerText
  );
  let itemTwoQty = parseFloat(document.getElementById("secondedCount").value);
  let itemTwoSum = itemTwoPrice * itemTwoQty;
  //   Check Out
  document.getElementById("total").innerText = (
    itemOneSum + itemTwoSum
  ).toFixed(2);
}

//Init First Item
function firstItemInit() {
  const addItemBtn = document.getElementById("addItem");
  const minusItemBtn = document.getElementById("minusItem");
  const removeBtn = document.getElementById("remove-item");
  addItemBtn.addEventListener("click", function () {
    addItem("itemCount");
    updatePrice();
  });
  minusItemBtn.addEventListener("click", function () {
    minusItem("itemCount", "firstItem");
    updatePrice();
  });
}
// // Init Second Item
function secondItemInit() {
  const secondAddItem = document.getElementById("secondPlusBtn");
  const secondMinusBtn = document.getElementById("secondMinusBtn");
  const secondRemoveBtn = document.getElementById("secondRemoveBtn");
  secondAddItem.addEventListener("click", function () {
    addItem("secondedCount");
    updatePrice();
  });
  secondMinusBtn.addEventListener("click", function () {
    minusItem("secondedCount", "secondItem");
    updatePrice();
  });
}
