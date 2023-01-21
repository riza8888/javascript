let arr = [ 4, 6, 2, 4, 7, 8, 3, 4, 6]

// // [2, 4, 4, 6, 7, 3, 4, 6, 8]

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[j], arr[j + 1]);
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}

// console.log(arr)

// [2, 4, 4, 6, 7, 3, 4, 6, 8]






















// function groupAnimals(data) {
//     let result = []
//     let kamus = "abcdefghijklmnopqrstuvwxyz"

//     for (let i = 0; i < kamus.length; i++){
//         let perKamus = kamus[i]
//         let kelompok = []
//       for (let j = 0; j < data.length; j++) {
//         if(perKamus === data[j][0]){
//           kelompok.push(data[j])
//         }

//       }

//         if(kelompok.length>0){
//           result.push(kelompok)
//         }

//       }

//     return result
//   }

//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//   /*
//   [
//     ["ayam", "anoa"],
//     ["cacing"],
//     ["kuda", "kancil"]],
//   */
