const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Async!!"), 5000) // = 5 seg.
            : reject(new Error("Error!!"))
    });
}

const anotherFn = async () => { // async // PALABRAS CLAVE
    const something = await fnAsync(); // await
    console.log(something);
    console.log("Hello");
}

console.log("BEFORE")
anotherFn()
console.log("AFTER")