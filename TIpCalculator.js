var preTipTotal = prompt("Please enter the bill amount" , "<bill total goes here>");

var tipPercentage = prompt("Please enter the percentage you would like to tip", "<tip percentage goes here>");

var TotalWithTip;

preTipTotal = parseFloat(preTipTotal);

tipPercentage = parseFloat(tipPercentage);

tipPercentage = parseFloat(tipPercentage) / 100.0;


TotalWithTip = preTipTotal + (preTipTotal * tipPercentage);

TotalWithTip = Math.round(TotalWithTip * 100)/100;


document.write ('Your total bill with tip is $' + TotalWithTip + '.');

