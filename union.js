"use strict";
exports.__esModule = true;
var score = 33;
score = 44;
score = "678";
var nafiUser = {
    name: "hanafi",
    id: 123
};
nafiUser = {
    username: "hanaf",
    id: 123
};
function getDB(id) {
    if (typeof id == "number") {
        console.log(id + 3);
    }
    if (typeof id == "string") {
        console.log("string");
    }
}
getDB(1);
getDB("ahgdawgk");
