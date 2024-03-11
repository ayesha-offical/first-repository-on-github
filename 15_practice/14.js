var guestlist = ["khadija", "muneeba", "khansa", "ayesha"];
var donotcome = guestlist[0];
console.log(donotcome, "not come at my home for dinner");
guestlist.splice(0, 1, "hamna");
guestlist.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to come for dinner at my home?")); });
