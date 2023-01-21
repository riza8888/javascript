// Generate Hobby Data

// const data = [
//     ['Basil', 27, 'Enjoying Meme'],
//     ['Zul Fikar', 27, 'Enjoying Meme'],
//     ['Damian Stapelkamp', 41, 'Cooking'],
//     ['Luffy', 20, 'Adventure']
// ]

function createArrayOfObject(array) {
    // your code here
    let result = []

    for (let i = 0; i < array.length; i++) {
        let obj = {
            name: array[i][0],
            age: array[i][1],
            hobby: array[i][2]
        }
        result.push(obj)
    }

    return result
}

// console.log(createArrayOfObject(data))

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
//     {
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

  function findHobbies(users, hobbies) {
    // code here
    let result = []

    for (let i = 0; i < hobbies.length; i++) {
        let perHobi = hobbies[i] // string
        let obj = {
            hobby: perHobi,
            people:[], //ditambah ini buat ddp
            totalAge:0// tambah ini juga buat ddp
        }

        for (let j = 0; j < users.length; j++) {
            let perUser = users[j]
            // console.log(perHobi, perUser.hobby)
            if (perHobi === perUser.hobby) {
                obj.people.push(perUser.name)
                obj.totalAge += perUser.age
            }
        }

        result.push(obj)
    }

    return result
  }

//   console.log(findHobbies(users, hobbies))
  /**
   * [
   *  {
   *    hobby: 'Enjoying Meme',
   *    people: ['Basil', 'Zul Fikar'],
   *    totalAge: 54
   *  },
   *  {
   *    hobby: 'Cooking',
   *    people: ['Damian Stapelkamp'],
   *    totalAge: 41
   *  }
   * ]
   *
   */

//   let hobbies = [
//     {
//       hobby: 'Enjoying Meme',
//       people: ['Basil', 'Zul Fikar'],
//       totalAge: 54
//     },
//     {
//       hobby: 'Cooking',
//       people: ['Damian Stapelkamp'],
//       totalAge: 41
//     }
//   ]
//   let num = 2
  
  function filteringHobbies(hobbies, number) {
    //code here
    let result = []

    for (let i = 0; i < hobbies.length; i++) {
        let perHobby = hobbies[i] // Object
        if (perHobby.people.length >= number) {
            perHobby.averageAge = perHobby.totalAge / perHobby.people.length

            if (perHobby.averageAge > 45) {
                perHobby.note = "this hobby is popular among old people"
            } else {
                perHobby.note = "this hobby is popular among young people"
            }

            result.push(perHobby)
        }
    }

    return result
  }
  
//   console.log(filteringHobbies(hobbies, num))
  
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
    // code here
    if (!hobbies || !selectedHobbies || !minimalPeople) {
        return "Invalid data"
    }

    if (hobbies.length === 0) {
        return "Data is empty"
    }

    let hasilCreateArrayOfObject = createArrayOfObject(hobbies)
    let hasilFindHobbies = findHobbies(hasilCreateArrayOfObject, selectedHobbies)
    let hasilFilteringHobbies = filteringHobbies(hasilFindHobbies, minimalPeople)
    // console.log(hasilFilteringHobbies);

    for (let i = 0; i < hasilFilteringHobbies.length; i++) {
      // console.log(hasilFilteringHobbies[i]);
      let obj=hasilFilteringHobbies[i]
      delete obj.totalAge
  
      
      
    }
    // console.log(output);

    if (hasilFilteringHobbies.length === 0) {
        return `All hobby has total people below ${minimalPeople}`
    }

    return hasilFilteringHobbies
  }
  
  console.log(generateHobbyEntity(data, ['Enjoying Meme', 'Cooking'], 3))
  /*
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
  console.log(generateHobbyEntity(data, ['Enjoying Meme', 'Cooking'], 7)) // All hobby has total people below 7
  // console.log(generateHobbyEntity([], [], 6)) //Data is empty
  // console.log(generateHobbyEntity(data)) //Invalid data
  // console.log(generateHobbyEntity(data, ['Playing Violin', 'Adventure', 'Cooking'], 2))
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
