function newUser(name, age, country) {
    var name = name || "Nestor";
    var age = age || 19;
    var country = country || "MX"
    console.log(name, age, country);
}

newUser();
newUser("Alejandra", 19, "FR");

//

function newAdmin(nombre = "Oscar", age = 30, country = "MX") {
    console.log(nombre, age, country);
}

newAdmin();
newAdmin("Christo", 25, "USA");