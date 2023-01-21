
// function sumColumn(arr) {
//     let max = -Infinity
//     let output=[]
//     for (let i = 0; i < arr.length; i++) {
      
//       // console.log(Arr);
//       if (arr[i].length > max) {
//         max = arr[i].length
//       }
  
//     }
   
//     for (let j = 0; j < max; j++) {
//       let total= 0
//       for (let x = 0; x < arr.length; x++) {
//        let perArr = arr[x];
//          console.log(perArr[j]);
//         // console.log(perArr);
        
//         if (perArr[j] !== undefined){
//           total+=perArr[j]
//         }
   
//       }
//       // console.log(total);
//       output.push(total)
//     }
    
  
  
//     return output
//   }

function sumColumn(arr) {
  // Tulis kode disini
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        // console.log(result[j],arr[i][j] )

          if (result[j] !== undefined) {
              result[j] += arr[i][j];
          } else {
              result[j] = arr[i][j];
              // console.log(result[j], "===")
          }
         
      }
  }
  return result;
}
  
  
  console.log(sumColumn(
      [
       [5],
       [2,  5, 12, 8],
       [4, 56,  3]
      ]
  )) 
  // [11, 61, 15, 8 ]