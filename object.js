// let idol = {age : "24", nama : "jennie"}
// // idol.Nama = "jennie"
// idol["Grup"] = "Blackpink"


// console.log(idol);
// console.log(idol["age"]);
// console.log(idol.age);
// console.log(idol["nama"]);
// // for (let property in idol){
// //     // console.log(property);
// //     console.log(idol[property]);
// // }

function changeMe(arr) {
    let result = ``
    // console.log(arr);
    let profil ={}
    for (let i = 0; i < arr.length; i++) {
        let perArr = arr[i]
        // console.log(perArr[3]);
        if(profil["firstName"] === undefined){
            profil["firstName"] = ""
        }
        if(profil["lastName"] === undefined){
            profil["lastName"] = ""
        }
        if(profil["gender"] === undefined){
            profil["gender"] = ""
        }
        if(profil["age"] === undefined){
            profil["age"] = 0
        }
        profil["firstName"]= perArr[0]
        profil["lastName"] = perArr[1]
        profil["gender"] =perArr[2] 
        profil["age"] = 2022 -perArr[3]

        if (!profil["age"]) {
            profil["age"] = "Invalid Birth Year"
        }
        // console.log(profil["age"]);
        
        
       
        console.log(`${i+1}. ${profil["firstName"]} ${profil["lastName"]}:`);
          console.log(profil);
        
    }
   

}



// console.log(changeMe([['Ogata', 'Rizu', 'female', 1995], ['John', 'Doe', 'male', 2000]]));

/*
1. Ogata Rizu: { firstName: 'Ogata', lastName: 'Rizu', gender: 'female', age: 27 }
2. John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 22 }

*/


console.log(changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]));


// 1. Christ Evans:
// { firstName: 'Christ', lastName: 'Evans', gender: 'Male', age: 40 }
// 2. Robert Downey:
// {
//   firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year'
// }

// STDOUT