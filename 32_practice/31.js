"use strict";
let current_users = ["ayesha", "shaheer", "muneeba", "naila", "khadija"];
let new_users = ["ayesha", "shaheer", "ali", "aliza", "noor"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`sorry ${new_user},this name is already taken`);
    }
    else {
        console.log(`yes ${new_user}, available in this list`);
    }
}
