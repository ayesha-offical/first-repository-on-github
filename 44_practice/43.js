"use strict";
function sandwitch(...items) {
    console.log("sandwitch order");
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`);
    }
}
console.log("enjoy your meal AYESHA FAISAL");
sandwitch(`chicken`, `chese`, `tomato`);
sandwitch(`beef`, `capsicam`);
sandwitch(`garlic chicken`, `mayo sauce`);
