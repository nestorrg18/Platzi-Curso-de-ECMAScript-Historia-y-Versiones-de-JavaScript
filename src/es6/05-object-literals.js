// enhanced object literals

function newUser(user,age,country,uId) {
    return {    //ANTES
        user, //user:user,
        age,  //age:age,
        country, //country:country,
        id: uId
        //uId   //uId:uId
    }
}

console.log(newUser("rigan", 50, "PE", 1));