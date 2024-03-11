//creating a guest list array//
let guestlist =["khadija","muneeba","khansa","ayesha"];
//making variable for those who can not come//
let donotcome = guestlist[0];
//print this statement for not coming guest//
console.log(donotcome,"not come at my home for dinner");
//add or remove values from guest list array//
guestlist.splice(0,1,"hamna");
//message print for bigger table//
console.log("Good Nwes! we have found a bigger table for dinner");
//addinng a new guest at starting index of array//
guestlist.unshift("sara");
//addinng a new guest at ending index of array//
guestlist.push("naila");
//get a middle index of our guestlist array//
let middleindex: number= Math.floor(guestlist.length / 2);
//addinng a new guest at middle index of array//
guestlist.splice(middleindex,0, "iqra");
//print message for updated list//
console.log("updated list for our guest");
//sending invitation to our guest one by one with thier name//
guestlist.forEach(oneguest => console.log(`salam ${oneguest} tsc 1would you like to come for dinner at my home?`))
