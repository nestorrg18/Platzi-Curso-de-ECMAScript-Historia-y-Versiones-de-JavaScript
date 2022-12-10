const user = { username:"Nestor", age: 20, country: "MX"}
const { username, ...values} = user
console.log(username)
console.log(values)