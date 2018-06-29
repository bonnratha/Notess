// Define constants

const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;

// input variables & constants
const threshold = 5000;
const accountBalance = 100000;

// Define variables
var amount = 0;
var numberOfPhone = 0;
var numberOfAccessory = 0;

function calculateTax (amt) {
amt = amt + (amt * taxRate);
return amt;
}
function formatAmount(amt2) {
return "$ " +amt2.toFixed(2);
}


while (amount<accountBalance) {

	numberOfPhone += 1;
	amount += phonePrice;
	if (amount<threshold) {
	numberOfAccessory += 1;
	amount += accessoryPrice;
	}

}

amount = calculateTax(amount);
console.log(formatAmount(amount));
