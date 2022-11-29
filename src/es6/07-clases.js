// declarar
class User {};
//Intancia de la clase
//  const newUser = new User();

class Usuario {
    //metodos
    greeting (){
        return "Hello ";
    }
};

const nestor = new Usuario();
console.log(nestor.greeting());
const mechas = new Usuario();
console.log(mechas.greeting());

//-------------------------------------
//CONSTRUCTOR
//-------------------------------------

class Cliente {
    //constructor
    constructor(){
        console.log("Nuevo cliente")
    }
    greeting (){
        return "Hello ";
    }
}

const zorro = new Cliente();

//----------------------
//     THIS
//----------------------

class Proveedor {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return "Hello"
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const garis = new Proveedor("Eder")
console.log(garis.greeting());

//---------------------------------
//  SETTERS & GETTERS
//---------------------------------

class Empleado {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return "Hello"
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }

    get yourAge(){
        return this.age;
    }
    set yourAge(old){
        this.age = old;
    }
}

const martinez = new Empleado("Angel", 28);
console.log(martinez.yourAge);
console.log(martinez.yourAge = 30);