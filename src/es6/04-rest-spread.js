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

// spread operator

let person = {name: "Nestor", age: 20};
let country = "CA";

let data = {id:1,...person, country};
console.log (data);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);

//
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)