// const data = [
//    ['Basil', 27, 'Enjoying Meme'],
//    ['Zul Fikar', 27, 'Enjoying Meme'],
//    ['Damian Stapelkamp', 41, 'Cooking'],
//    ['Luffy', 20, 'Adventure']
//  ]

function createArrayOfObject(array){
   let output=[]
   // console.log(array);
   for (let i = 0; i < array.length; i++) {
      // console.log(array[i]);
      let name= array[i][0]
      let age=array[i][1]
      let hobby = array[i][2]
      let obj={name, age, hobby}
      output.push(obj)
   }
   // console.log(output);
   return output
}
// console.log(createArrayOfObject(data));

 /*
  [
    {
      name: 'Basil',
      age: 27,
      hobby: 'Enjoying Meme'
    },
    {
      name: 'Zul FIkar',
      age: 27,
      hobby: 'Enjoying Meme'
    },
    {
      name: 'Damian Stapelkamp',
      age: 41,
      hobby: 'Cooking'
    },
    {
      name: 'Luffy',
      age: 20,
      hobby: 'Adventure'
    }
  ]
  */
// let users =  [
//    {
//       name: 'Basil',
//       age: 27,
//       hobby: 'Enjoying Meme'
//     },
//     {
//       name: 'Zul FIkar',
//       age: 27,
//       hobby: 'Enjoying Meme'
//     },
//     {
//       name: 'Damian Stapelkamp',
//       age: 41,
//       hobby: 'Cooking'
//     },
//     {
//       name: 'Luffy',
//       age: 20,
//       hobby: 'Adventure'
//     }
//   ]

//   let hobbies = ['Enjoying Meme', 'Cooking']

function findHobbies(users, hobbies){

   let output=[]
   
   // console.log(users);
   for (let i = 0; i < hobbies.length; i++) {
      // console.log(hobbies[i]);
      let obj={hobby: "",people:[], totalAge: 0}
      
      for (let j = 0; j < users.length; j++) {
         // console.log(users[j].hobby);
         if(hobbies[i]=== users[j].hobby){
            obj.hobby=hobbies[i]
            obj.people.push(users[j].name)
            obj.totalAge+=users[j].age
         }
      }
      output.push(obj)
      
   }
   // console.log(output);
   return output

}
// console.log(findHobbies(users, hobbies));

/*
[
   {
      hobby: `Enjoying Meme`,
      people:  [`Basil`,`Zul Fikar`],
      totalAge: 54
   }
   {
      hobby: `Cooking`,
      people: [`Damian Stapelkamp`],
      totalAge: 41 
   }
]
*/
// let hobbies = [
//    {
//      hobby: 'Enjoying Meme',
//      people: ['Basil', 'Zul Fikar'],
//      totalAge: 54
//    },
//    {
//      hobby: 'Cooking',
//      people: ['Damian Stapelkamp'],
//      totalAge: 41
//    }
//  ]
//  let num = 2

function filteringHobbies(hobbies, num) {

   // console.log(hobbies);
   let output=[]
   
   for (let i = 0; i < hobbies.length; i++) {
      // console.log(hobbies[i].people);
      let obj={hobby: "", people: [], totalAge: 0, averageAge:0, note:""}
      // console.log(hobbies[i].people.length, num);
      if(hobbies[i].people.length >= num){
         obj.hobby=hobbies[i].hobby
         obj.people=hobbies[i].people
         obj.totalAge=hobbies[i].totalAge
         obj.averageAge = hobbies[i].totalAge/hobbies[i].people.length
         if(obj.averageAge>45){
            obj.note= "this hobby is popular among old people"
         } else{
            obj.note ="this hobby is popular among young people"
         }
         output.push(obj)
      }
      
      
      
   }
   // console.log(output);
   return output

}
// console.log(filteringHobbies(hobbie,num));
/*
/**
 * [
 *  {
 *    hobby: 'Enjoying Meme',
 *    people: ['Basil', 'Zul Fikar'],
 *    totalAge: 54,
 *    averageAge: 27,
 *    note: "This hobby is popular among young people
 *  }
 * ]
 * /
*/

const data = [
   ['Basil', 27, 'Enjoying Meme'],
   ['Zul Fikar', 27, 'Enjoying Meme'],
   ['Damian Stapelkamp', 41, 'Cooking'],
   ['Arthur', 46, 'Cooking'],
   ['Luffy', 20, 'Adventure'],
   ['Brett Yang', 25, 'Playing Violin'],
   ['Eddy Chen', 49, 'Cooking'],
   ['Okumura Rin', 16, 'Playing Violin'],
   ['Linn Yang', 45, 'Playing Violin'],
   ['Alexander', 17, 'Enjoying Meme'],
   ['Kosasih', 45, 'Cooking']
 ]
function generateHobbyEntity(hobbies, selectedHobbies, minimalPeople) {
   if(!hobbies||!selectedHobbies){
      return `Invalid data`
   }
   if(hobbies.length ===0 ||selectedHobbies.length ===0){
      return `Data is empty`
   }

   let arrObj= createArrayOfObject(hobbies)
   let findHoby= findHobbies(arrObj, selectedHobbies)
   let filterHoby =filteringHobbies(findHoby, minimalPeople)

   // console.log(arrObj);
   // console.log(findHoby);
   // console.log(filterHoby);
   if (filterHoby.length ===0){return `All hobby has total people below ${minimalPeople}`}

   return filterHoby

}

// console.log(generateHobbyEntity(data, ['Enjoying Meme', 'Cooking'], 3));
console.log(generateHobbyEntity(data, ['Enjoying Meme', 'Cooking'], 7)) // All hobby has total people below 7
// console.log(generateHobbyEntity([], [], 6)) //Data is empty
// console.log(generateHobbyEntity(data)) // Invalid data
// console.log(generateHobbyEntity(data, ['Playing Violin', 'Adventure', 'Cooking'], 2));
/*
output:
[
  {
    hobby: 'Enjoying Meme',
    people: [ 'Basil', 'Zul Fikar', 'Alexander' ],
    totalAge: 71,
    averageAge: 23.666666666666668,
    note: 'this hobby is popular among young people'
  },
  {
    hobby: 'Cooking',
    people: [ 'Damian Stapelkamp', 'Arthur', 'Eddy Chen', 'Kosasih' ],
    totalAge: 181,
    averageAge: 45.25,
    note: 'this hobby is popular among old people'
  }
]
*/

/*
[
  {
    hobby: 'Playing Violin',
    people: [ 'Brett Yang', 'Okumura Rin', 'Linn Yang' ],
    totalAge: 86,
    averageAge: 28.666666666666668,
    note: 'this hobby is popular among young people'
  },
  {
    hobby: 'Cooking',
    people: [ 'Damian Stapelkamp', 'Arthur', 'Eddy Chen', 'Kosasih' ],
    totalAge: 181,
    averageAge: 45.25,
    note: 'this hobby is popular among old people'
  }
]
*/