// Return list of movies based on argument
function filterMovie(genres) {
    let movies = [
        ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
        ["Action", "Mad Max", "The Batman", "Josh Wick"],
        ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
        ["Comedy", "Safety Last", "The Trip"]
    ];
    // console.log(genres);

    
    
let userChoice = []
let temp = ""

for (let i = 0; i <= genres.length; i++) {
  let perGenre = genres[i];
  

  if (perGenre === ";" || perGenre === undefined) {
    userChoice.push(temp)
    temp = ""
  } else if (perGenre !== ";") {
    temp += perGenre
  }
//   console.log(userChoice);
  //  
}
// console.log(userChoice);



    let output=[]
    for (let i = 0; i < movies.length; i++) {
       let perFilm = movies[i]
    //    console.log(perFilm[0]);
        for (let j = 0; j < userChoice.length; j++) {
            let perGenre= userChoice[j]
            // console.log(perGenre);
            if(perFilm[0] === perGenre){
                output.push(perFilm)
            }
 
        } 
    }

    // console.log(output);
    // if (output.length === 0){
    //     return `Movie not found`
    // }

    return output

}

function usersCanWatch(users) {
    if(typeof users !== "object"){
      return `Invalid Data!`
    }
   
    
    let recom = filterMovie(users.menu)
     if(recom.length===0){return `Movie not found`}
    // console.log(recom);
    return recom
    
}

// TEST CASE ---------------------------------------------------------------------------------------
const user1 = {
    name: "Bari",
    cinema: "XIV",
    menu: "Action;Drama;Comedy"
};
// console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user2 = {
    name: "Tole",
    cinema: "XIIX",
    menu: "Fantasy;Adventure;Comedy"
};
// console.log(usersCanWatch(user2));
/*
[
  ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user3 = {
    name: "Rizky",
    cinema: "Cinepolos",
    menu: "Scifi-Musical"
};
console.log(usersCanWatch(user3));
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"