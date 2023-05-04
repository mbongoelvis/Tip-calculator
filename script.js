//we select all the needed elements using queryselector
let bill = document.querySelector("#amount").value.trim();
let total = document.querySelector("#total");
let amount = document.querySelector(".money")
const button = document.querySelector("#button");
const person = document.querySelector("#person")
const custom = document.querySelector("#custom")
//selecting the percentages 
const five = document.querySelector(".five")
const ten = document.querySelector(".ten")
const fifteen = document.querySelector(".fifteen")
const twentyfive = document.querySelector(".twentyfive")
const fifty = document.querySelector(".fifty")

//Adding event listeners for the tip percentages
five.addEventListener("click", function(){
    NewBill = parseFloat(bill)
    tip = Math.floor(0.05 * NewBill)
    let sub = NewBill - tip
    total.textContent = "$" + sub
    amount.textContent = "$" + tip
});

ten.addEventListener("click", function () {
    NewBill = bill
    tip = Math.floor(0.10 * NewBill)
    let sub = NewBill - tip
    total.textContent = "$" + sub
    amount.textContent = "$" + tip
});
fifteen.addEventListener("click", function () {
    NewBill = bill
    tip = Math.floor(0.15 * NewBill)
    let sub = NewBill - tip
    total.textContent = "$" + sub
    amount.textContent = "$" + tip
});
twentyfive.addEventListener("click", function () {
    NewBill = bill
    tip = Math.floor(0.25 * NewBill)
    let sub = NewBill - tip
    total.textContent = "$" + sub
    amount.textContent = "$" + tip
});
fifty.addEventListener("click", function () {
    NewBill = bill
    tip = Math.floor(0.5 * NewBill)
    let sub = NewBill - tip
    total.textContent = "$" + sub
    amount.textContent = "$" + tip
});

//reset button
let reset = document.querySelector('button');
let sign = "$"+ "0.00";

reset.addEventListener('click', function(){
    amount.textContent = sign
    total.textContent = sign

})