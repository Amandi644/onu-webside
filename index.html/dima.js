
const conti = document.getElementById("conti");
const mechelButton = document.getElementById("michelin");

const aluButton1 = document.getElementById("alu1");
const aluButton2 = document.getElementById("alu2");
const aluButton3 = document.getElementById("alu3");
const aluButton4 = document.getElementById("alu4");

const submitOrder = document.getElementById("submit-order");
const totalCost = document.getElementById("total-cost");

const shoppCart = document.getElementById("shopping-img");


// ==========================
// CONTI
// ==========================

const contiMinus = document.getElementById("conti-minus");
const contiPlus = document.getElementById("conti-plus");
const contiNumber = document.getElementById("conti-number");


// ==========================
// ALU 1
// ==========================

const alu1Minus = document.getElementById("alu1-minus");
const alu1Plus = document.getElementById("alu1-plus");
const alu1Number = document.getElementById("alu1-number");


// ==========================
// MICHELIN
// ==========================

const michelinMinus = document.getElementById("michelin-minus");
const michelinPlus = document.getElementById("michelin-plus");
const michelinNumber = document.getElementById("michelin-number");


// ==========================
// ALU 2
// ==========================

const alu2Minus = document.getElementById("alu2-minus");
const alu2Plus = document.getElementById("alu2-plus");
const alu2Number = document.getElementById("alu2-number");


// ==========================
// ALU 4
// ==========================

const alu4Minus = document.getElementById("alu4-minus");
const alu4Plus = document.getElementById("alu4-plus");
const alu4Number = document.getElementById("alu4-number");


// ==========================
// ALU 3
// ==========================

const alu3Minus = document.getElementById("alu3-minus");
const alu3Plus = document.getElementById("alu3-plus");
const alu3Number = document.getElementById("alu3-number");


// ==========================
// PRICES
// ==========================
const shopp =  0;
const priceA = 183; // Conti
const priceB = 75;  // Alu 1
const priceC = 140; // Michelin
const priceD = 230; // Alu 2
const priceE = 160; // Alu 4
const priceF = 99;  // Alu 3
 // Shopping Cart

// ==========================
// QUANTITIES
// ==========================

let aQuantity = 0;
let bQuantity = 0;
let cQuantity = 0;
let dQuantity = 0;
let eQuantity = 0;
let fQuantity = 0;
let gShopp = 0;


// ==========================
// UPDATE TOTAL
// ==========================

function updateTotal() {

  const cost =
    priceA * aQuantity +
    priceB * bQuantity +
    priceC * cQuantity +
    priceD * dQuantity +
    priceE * eQuantity +
    priceF * fQuantity +
    shopp  * gShopp;
  totalCost.textContent = `Total: ${cost}€`;


  // Update quantity numbers
  shoppCart.textContent = gShopp;

  contiNumber.textContent = aQuantity;

  alu1Number.textContent = bQuantity;

  michelinNumber.textContent = cQuantity;

  alu2Number.textContent = dQuantity;

  alu4Number.textContent = eQuantity;

  alu3Number.textContent = fQuantity;
}


// ==========================
// CONTI
// ==========================
shoppCart.addEventListener("click",()=>{
  gShopp++;
  updateTotal();
})

conti.addEventListener("click", () => {

  aQuantity++;

  updateTotal();

});


contiPlus.addEventListener("click", () => {

  aQuantity++;

  updateTotal();

});


contiMinus.addEventListener("click", () => {

  if (aQuantity > 0) {

    aQuantity--;

    updateTotal();

  }

});


// ==========================
// ALU 1
// ==========================

aluButton1.addEventListener("click", () => {

  bQuantity++;

  updateTotal();

});


alu1Plus.addEventListener("click", () => {

  bQuantity++;

  updateTotal();

});


alu1Minus.addEventListener("click", () => {

  if (bQuantity > 0) {

    bQuantity--;

    updateTotal();

  }

});


// ==========================
// MICHELIN
// ==========================

mechelButton.addEventListener("click", () => {

  cQuantity++;

  updateTotal();

});


michelinPlus.addEventListener("click", () => {

  cQuantity++;

  updateTotal();

});


michelinMinus.addEventListener("click", () => {

  if (cQuantity > 0) {

    cQuantity--;

    updateTotal();

  }

});


// ==========================
// ALU 2
// ==========================

aluButton2.addEventListener("click", () => {

  dQuantity++;

  updateTotal();

});


alu2Plus.addEventListener("click", () => {

  dQuantity++;

  updateTotal();

});


alu2Minus.addEventListener("click", () => {

  if (dQuantity > 0) {

    dQuantity--;

    updateTotal();

  }

});


// ==========================
// ALU 4
// ==========================

aluButton4.addEventListener("click", () => {

  eQuantity++;

  updateTotal();

});


alu4Plus.addEventListener("click", () => {

  eQuantity++;

  updateTotal();

});


alu4Minus.addEventListener("click", () => {

  if (eQuantity > 0) {

    eQuantity--;

    updateTotal();

  }

});


// ==========================
// ALU 3
// ==========================

aluButton3.addEventListener("click", () => {

  fQuantity++;

  updateTotal();

});


alu3Plus.addEventListener("click", () => {

  fQuantity++;

  updateTotal();

});


alu3Minus.addEventListener("click", () => {

  if (fQuantity > 0) {

    fQuantity--;

    updateTotal();

  }

});


// ==========================
// SUBMIT ORDER
// ==========================

submitOrder.addEventListener("click", () => {

  const cost =
    priceA * aQuantity +
    priceB * bQuantity +
    priceC * cQuantity +
    priceD * dQuantity +
    priceE * eQuantity +
    priceF * fQuantity+
    shopp  * gShopp;

  alert(
    `Your order has been submitted!\n\n` +

    `Conti: ${aQuantity}\n` +
    `Alu 1: ${bQuantity}\n` +
    `Michelin: ${cQuantity}\n` +
    `Alu 2: ${dQuantity}\n` +
    `Alu 4: ${eQuantity}\n` +
    `Alu 3: ${fQuantity}\n\n` +
    `Schopping cart:${gShopp}`+
    `Total: ${cost} €`
  );

});

