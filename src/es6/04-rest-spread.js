// arrays destructuring

let fruits = ["Apple", "Banana"];
let [a,b] = fruits;
console.log(a,b);
console.log(a,fruits[1]);

// object destructuring

let user = {username: "Oscar", age: 36};
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);