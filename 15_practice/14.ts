let guestlist =["khadija","muneeba","khansa","ayesha"];
let donotcome = guestlist[0];
console.log(donotcome,"not come at my home for dinner");
guestlist.splice(0,1,"hamna");
guestlist.forEach(guest =>console.log(`salam ${guest}, would you like to come for dinner at my home?`));

