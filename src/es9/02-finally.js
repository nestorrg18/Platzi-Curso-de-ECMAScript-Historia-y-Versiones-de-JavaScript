const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (false ) { // en true entra el resolve
            resolve("Congratulatios")
        } else {
            reject("Oh, damm it")
        }
    })
}

anotherFunction()
    .then(response => console.log("Then "+response))
    .catch(err => console.log("catch "+err))
    .finally(() => console.log("Finally"));