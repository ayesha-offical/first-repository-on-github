"use strict";
function makeShirt(size = `large`, text = `i love my self`) {
    console.log(`you have order a ${size} shirt that says ${text}`);
}
makeShirt();
makeShirt(`medium`);
makeShirt(`small`, `i need a big shirt to wear`);
