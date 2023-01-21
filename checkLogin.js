function sayHi (name){
    console.log("hi "+name);

}
sayHi("devira")

function checkLogin(username, password){
    if(typeof username !== "string"|| typeof password !== "string"){console.log("input salah")}
    else {
        if (username === "Kosasih" && password === "k0s4s1h"){console.log("login berhasil")}
        else {console.log("coba lagi");}

    }

}
checkLogin("","")