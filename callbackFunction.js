//passing function as parameter

function name(){
    return "Welcome to the functions";
}

function two( user, callback){
    let result = callback();
    console.log(user,result);
}
two("Vinod",name);
