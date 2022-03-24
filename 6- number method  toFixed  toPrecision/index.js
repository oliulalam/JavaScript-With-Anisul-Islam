var num1 = 20;
//number theke string a convate korte bebohar kora hoy toString 
num1 =toString(num1);
console.log(typeof(num1)); 

var num2 = "20";
// stiring theke number a convart korte use kora hoy
num2 =parseInt(num2);
console.log(typeof(num2)); 

var num3 = 20.5664545;
//tofixd er maddhome .er pore koyta sonkha ache ta bole dite pari
console.log(num3.toFixed(3)); 

var number1 = 20.777837;
// total kota sonkkha show korate chan ta set kore  .toPrecision
console.log(number1.toPrecision(3));

// console log (Number("12")) use korle string ta ke number a convart kore nibe  
console.log(Number("12"));

//amar chaile type tao dekhte pari typeof use kore 
console.log(typeof(Number("12")));

// true ke jodi number a convart korte chai tahole print korte 1
console.log(Number(true));

// false ke jodi number a convart korte chai tahole print korte 0
console.log(Number(false));