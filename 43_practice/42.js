"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
// const magician: string[] = ["dareen brown","teller","criss angel"];
//  show_magicians(magician);
// function make_great(magicians: string[]): void {
//     for (let i =0; i < magicians.length; i++){
//         magicians[i] = magicians[i] +   ` the great `
//     }
// }
// const magicians2: string[]=["dareen brown","teller","criss angel"];
// make_great(magicians2);
// show_magicians(magicians2);
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + `the great`);
    }
    return greatMagicians;
}
const magicians3 = ["dareen brown", "teller", "criss angel"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
