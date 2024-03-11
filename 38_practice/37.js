"use strict";
function describe_city(city, country = `pakistan`) {
    console.log(`${city} is in ${country}`);
}
describe_city(`karachi`); //default city
describe_city(`france`, `europe`);
describe_city(`lahore `, `  punjab`);
