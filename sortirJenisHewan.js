
function getAnimals(arr) {
  // console.log(arr);
  let output =[]
  let karnivora = []
  let herbivora = []
  let omnivora = []
  for (let i = 0; i < arr.length; i++) {
      let perHewan = arr[i];
      let temp = ""
      // console.log(perHewan[perHewan.length-1]);
          if(perHewan[perHewan.length-1] === "K"){
              // console.log(perHewan[j]);
              for (let j = 0; j < perHewan.length-2; j++) {
                  temp +=perHewan[j]  
              }
              karnivora.push(temp)
          }
          if(perHewan[perHewan.length-1] === "H"){
              // console.log(perHewan[j]);
              for (let j = 0; j < perHewan.length-2; j++) {
                  temp +=perHewan[j]       
              }  
              herbivora.push(temp)
          }
          if(perHewan[perHewan.length-1] === "O"){
              for (let j = 0; j < perHewan.length-2; j++) {
                  temp +=perHewan[j]
              }
              
              omnivora.push(temp)
          }
         
          temp =""
          
  }
  // console.log(karnivora.length);
  if (karnivora.length <= 1 && herbivora.length<=1 && omnivora.length<=1){
      output.push(karnivora,herbivora,omnivora)
      // console.log(output);
      let final = []
      for (let k = 0; k < output.length; k++) {
          let perArr = output[k]
          // console.log(perArr);
          for (let x = 0; x < perArr.length; x++) {
          //    console.log(perArr[x]);
              final.push(perArr[x])
              
          }

      }


      return final
  }

  if(karnivora.length>1){
      // console.log(karnivora[0]);
      if (karnivora[0].length> karnivora[1].length){
          output.push(karnivora[0])
      } else {output.push(karnivora[1])}
  }
  // console.log(herbivora);
  if(herbivora.length>1){
      if (herbivora[0].length> herbivora[1].length){
          output.push(herbivora[0])
      } else {output.push(herbivora[1])}
  }
  // console.log(omnivora);
  if(omnivora.length>1){
      if (omnivora[0].length> omnivora[1].length){
          output.push(omnivora[0])
      } else {output.push(omnivora[1])}
  }
  return output
}


  //Test Case 
  
  // console.log(getAnimals(['Singa:K', 'Kuda:H', 'Monyet:O']))
  // [ 'Singa','Kuda','Monyet' ]
  
  // console.log(getAnimals(['Macan:K', 'Ayam:O', 'Gajah:H', 'Monyet:O', 'Kerbau:H', 'Musang:O', 'Burung:H', 'Hiu:K']))
  // // [ 'Macan', 'Kerbau', 'Monyet' ]
  
  // console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
  // //   // [ 'Harimau', 'Perkutut', 'Beruang' ]
  
    /*
    ['hewanJenisKarnivora', 'HewanJenisHerbivora', 'hewanJenisomnivora']
       yang dimasukin yang nawa hewan dengan huruf terbanyak
     */

//cara rey

// Filter an array of animals to only contain certain category
function filterAnimal(arr, category) {
  let animals = [];
  for (let i = 0; i < arr.length; i++) { // For every animal
    let temp = '';
    let perAnimal = arr[i];
    // console.log(perAnimal[perAnimal.length - 1]);
    if (perAnimal[perAnimal.length - 1] === category) { // If that animal is the same as category
      for (let j = 0; j < perAnimal.length - 2; j++) { // Add each character but the last 2
        let perChar = perAnimal[j];
        // console.log(perChar);
        temp += perChar
      }
      animals.push(temp); // Push animal into animals
    }
  }
  // console.log(animals,"===");
  return animals;
}

function findLongest(animals) {
  let longest = -Infinity;
  let index;
  console.log(animals);
  for (let i = 0; i < animals.length; i++) {
    if (animals[i].length > longest) { // 
      longest = animals[i].length
      // console.log(longest);
      index = i;
    }
  }
  console.log(animals[index]);
  return animals[index];
}

// Main function
function getAnimals(arr) {
  let karnivora = findLongest(filterAnimal(arr, "K"));
  let herbivora = findLongest(filterAnimal(arr, "H"));
  let omnivora = findLongest(filterAnimal(arr, "O"));

  // return [karnivora, herbivora, omnivora];
}

console.log(getAnimals(['Tikus:O', 'Merpati:H', 'Beruang:O', 'Elang:K', 'Perkutut:H', 'Harimau:K']))
  //   // [ 'Harimau', 'Perkutut', 'Beruang' ]