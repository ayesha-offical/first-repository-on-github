"use strict";
//define eqaual or unequal
let ayesha = "ayesha";
console.log("is apple equal to apple:?");
console.log(ayesha == "ayesha");
console.log("\nis apple not equal to apple:?");
console.log(ayesha != "ayesha");
//use lowercase function
let mango = "mango";
let uppercasemango = "MANGO";
console.log("is MANGO is equal to mango after conversation in lowercase:?");
console.log(uppercasemango.toLowerCase() == "mango");
console.log("\nis MANGO is not equal to mango after conversation in lowercase:?");
console.log(uppercasemango.toLowerCase() != "mango");
//numerical test
// equal to
let ten = 10;
let twenty = 10;
console.log("\nis 10 is equal to 10:?");
console.log(ten == twenty);
//not equal to
console.log("\nis 10 is not equal to 10:?");
console.log(ten != twenty);
//greater than
console.log("\nis twenty  is greater than equal to ten?");
console.log(20 >= 10);
//less than
console.log("\nis twenty  is less than equal to ten?");
console.log(20 <= 10);
//using "and"&"or"operators
let twen = 20;
let te = 10;
//using "&&"(AND)
console.log("\n twenty is  not equals to ten and twenty is greater than equal to ten?");
console.log(twen != 10 && te >= 10);
//using "&&"(AND)
console.log("\n twenty is   equals to ten and twenty is less than equal to ten?");
console.log(twen == 10 && te <= 10);
//using  "||" (OR)
let sixty = 60;
let twe = 20;
console.log("\n twenty is greater than 60 or 20 is equal to 20?");
console.log(twe > sixty || twe == 20);
console.log("\n twenty is greater than 60 or 20 is equal to 20?");
console.log(twe > sixty || twe != 20);
//using operators by array(test wheater an item is include in array)
let foods = ["biryani", "ramen", "pizza"];
console.log("\n is pizza include in my foods array?");
console.log(foods.includes("pizza"));
console.log("\n is burger include in my foods array?");
console.log(foods.includes("burger"));
