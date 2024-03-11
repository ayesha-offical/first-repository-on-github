"use strict";
//write name of countries which we want to go//
let countriesforvisit = ["dubai", "china", "bahrain", "australia"];
console.log("orignal array :", countriesforvisit);
//print array in alphabetical order without modify the actual array//
console.log("alphabetical array :", [...countriesforvisit].sort());
//show that the array is in original order or not//
console.log("still in orignal order:", countriesforvisit);
//print array list in reverse order without modify thier orignal list//
console.log("reverse order:", [...countriesforvisit].reverse());
//show that the array is in original order or not//
console.log("still in orignal order:", countriesforvisit);
//print orignal array list in reverse situation//
console.log("orignal array reversed:", countriesforvisit.reverse());
//we want orignal list so ew can reverse again//
console.log(" back to orignal array:", countriesforvisit.reverse());
//sort array in aplhabetical order//
console.log("sort in alphabetical order:", countriesforvisit.sort());
// again print orignal array list in reverse situation//
console.log(" again orignal array reversed:", countriesforvisit.reverse());
