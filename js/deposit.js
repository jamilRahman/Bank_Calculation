// step-1: sdd event listener to the deposit button

document.getElementById('btn-deposit').addEventListener('click', function(){
  
// step-2: get the deposit amount from the deposit input field
// For input field use. value to the value inside the input field

const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

// console.log(depositAmount);

// step-3: get the current deposit total
// for non-input(element other than input, textarea) use innerText to get the text

const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText;

const previousDepositTotal = parseFloat(previousDepositTotalString);

// step-4: add numbers to set the total deposit
const currentDepositTotal = previousDepositTotal + newDepositAmount;

depositTotalElement.innerText = currentDepositTotal;

// step-5: get ballance current total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// step-6: Calculate current total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//  set the balance total
balanceTotalElement.innerText = currentBalanceTotal;

// step-7: clear the deposit field
depositField.value = '';
})