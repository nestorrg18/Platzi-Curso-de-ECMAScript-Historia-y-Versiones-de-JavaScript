const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));
const promise4 = new Promise((simon, nel ) => simon("homes") )

Promise.allSettled([promise1, promise2, promise3, promise4])
.then(response => console.log(response));