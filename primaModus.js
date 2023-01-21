// function angkaPrima(angka) {
//   if (angka<=3){
//     return `true`
//   }
//   if(angka % angka===0 && angka %2 !== 0 && angka%3 !== 0){ return `true`}
//   else{return `false`}

// }

//ATAU PAKE CARA INI
// function angkaPrima(angka) {
//   // you can only write your code here!
//    for (let i = 2; i < angka; i++) {
//     // console.log(i,angka);
//     if (angka % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }



// console.log(angkaPrima(3));// true
// console.log(angkaPrima(7));//true
// console.log(angkaPrima(6));// false
// console.log(angkaPrima(23));// true
// console.log(angkaPrima(33));// false


// //bilangan yang hanya bisa dibagi 1 dan bilangan itu sendiri
// console.log(angkaPrima(3));// true
// console.log(angkaPrima(7));//true
// console.log(angkaPrima(6));// false
// console.log(angkaPrima(23));// true
// console.log(angkaPrima(33));// false

// function cariModus(arr) {

//     let temp ={}
//     for (let i = 0; i < arr.length; i++) {
//       //  console.log( arr[i]);
//        let number = arr[i]
//        if (!temp[number]){
//         temp[number] = 0
//        }
//        temp[number]++
      
//     }
//     // console.log(temp, "ini temp");
//     // console.log(temp,Object.keys(temp));
//     let max =-Infinity
//     let output=0
//     for (const key in temp) {
//       // console.log(key, temp[key]);
  
//       if (max < temp[key]) {
//         max= temp[key]
//         output=key
        
//       }
//     }
//     console.log(max);
//     // console.log(Object.keys(temp).length);
//     if(Object.keys(temp).length ===1 || max===1){
//       return `-1`
//     } else {
//       return output
//     }
  
  // }


  //ATAU PAKE CARA INI
  function cariModus(arr) {
    // write your code here
    let result = -1;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i+1; j < arr.length; j++) {
          // console.log(arr[j],"==",arr[i],arr[j] === arr[i]);
            if (arr[j] === arr[i]) {
                count++;
            }
        }
        if (count > total) {
            total = count;
            result = arr[i];
        }
    }
    // console.log(total);
    if (total === arr.length || total === 1) {
        return -1;
    }
    return result;
  }
  
  
  console.log(cariModus([10, 4, 5, 2, 4]));//4
  console.log(cariModus([7, 7, 7, 7, 7]));//-1
  console.log(cariModus([10, 3, 1, 2, 5]));//-1
  console.log(cariModus([5, 10, 10, 6, 5]));//5

  //atau pake cara ini
  function cariModus(arr) {
    for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - i; j++){
          if(arr[j] > arr[j+1]){
              let temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp
          }
      }
    }
    let arrAngka = []
    let arrCount = []
    let angka = arr[0]
    let count = 0
    for(let k = 0; k <= arr.length; k++){
      if(arr[k] === angka){
          count++
      }else{
          arrAngka.push(angka)
          angka = arr[k]
          arrCount.push(count)
          count = 1
          
      }
    }
  //   console.log(arr);
  //   console.log(arrAngka, arrCount);
    let max = -Infinity
    let angkaTerbanyak
    for(let l = 0; l < arrCount.length; l++){
      if(max < arrCount[l]){
          max = arrCount[l]
          angkaTerbanyak = arrAngka[l]
      }
    }
    if(max === 1 || arrAngka.length === 1){
      return -1
    }
    return angkaTerbanyak
  }
  
  let arr = [6, 5, 4, 3, 6, 5, 7, 8, 7, 7, 2, 3, 2];
  console.log(cariModus(arr));
  
  
  
  
  