var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
// amar jokhon prompt use kore input nei tokhon ta string hisabe pay
// r string gula ke number a convate korte 

num1 = parseInt(num1,10);
num2 = parseInt(num2,10);



var sum,sub,gun,vag, vagsesh;

sum = num1 + num2;
document.write("Addition = "+ sum+ "<br/>");


sub = num1 - num2;
document.write("Subtraction = " + sub + "<br/>");

gun = num1 * num2;
document.write("Multi = "+ gun + "<br/>");

vag = num1 / num2;
document.write("divide = "+ vag + "<br/>");

vagsesh = num1 % num2;
document.write("vagsesh = "+ vagsesh + "<br/>");


