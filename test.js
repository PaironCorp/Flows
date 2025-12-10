const search = require("./search");
const data = require("./data.json");



console.log(search("a", data));

console.log("Search started...");

console.log(search("ap", data));


console.time("search");
...
console.timeEnd("search");


console.log(search("", data));
