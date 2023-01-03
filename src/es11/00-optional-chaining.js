const users = {
    nestor: {
        country: "MX"
    },
    christo: {
        country: "CO"
    }
}

console.log(users.christo.country);
console.log(users.nestor.country);
console.log(users.nestor.age);
console.log(users.bebeloper?.country); // asi es mejor
console.log(users?.bebeloper?.country);