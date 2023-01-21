function sorting(array) {
    // your code here
  
    for (let i = 0; i < array.length; i++) {
      let perArr = array[i];
      // console.log(perArr);
      for (let j = 0; j < array.length; j++) {
         if (array[j]> array[j+1]){
          let temp = array[j]
          array[j]= array[j+1]
          array[j+1] = temp
         }
  
      }
  
    }
    return array
  }
  
  
  
  // console.log(arr)
  let number = []
  let string = []
  let hasil = []
  let output = []
  
  
  function sortingByType(array) {
    // your code here
    for (let i = 0; i < array.length; i++) {
      let perArr = array[i];
  
      // console.log(typeof perArr);
      if (typeof perArr === "number") {
        number.push(perArr)
      } else if (typeof perArr === "string") {
        string.push(perArr)
      } else if (typeof perArr === "boolean") {
        hasil.push(perArr)
      }
    }
    // sortir angka dari besar ke kecil
    for (let hitungan = 0; hitungan < number.length; hitungan++) {
      for (let j = 0; j < number.length; j++) {
        if (number[j] > number[j + 1]) {
          let penampung = number[j]
          number[j] = number[j + 1]
          number[j + 1] = penampung
        }
  
      }
  
    }
  
    // sortir sesuai alphabet
    let abjad = "abcdefghijklmnopqrstu"
    let string2 = []
    for (let x = 0; x < abjad.length; x++) {
      let huruf = abjad[x];
      for (let k = 0; k < string.length; k++) {
        // console.log(string[k]);
        if (string[k][0] === huruf) {
          string2.push(string[k])
        }
  
      }
  
    }
  
    let hasil2= []
    for (let m = 0; m < abjad.length; m++) {
      let huruf2 = abjad[m];
      for (let u = 0; u < hasil.length; u++) {
        let turnString = String(hasil[u]);
        // console.log(turnString[0], huruf2, turnString[0]=== huruf2);
        if (turnString[0]=== huruf2){
          // console.log(hasil[u]);
          hasil2.push(hasil[u])
        }
        
      }
      
    }
   
    // console.log(hasil2);
    output.push(number, string2, hasil2)
    return output
  
  }
  
  function sortAllClean(array) {
  
    let number= []
    let boolean=[]
    let string = []
  
     for (let i = 0; i < array.length; i++) {
      let item =array[i];
     
      if (typeof item === "number"  ){
        if (!isNaN(item)){
          number.push(item)
        }
      }
      if(typeof item === "string"){
        string.push(item)
      }
      if (typeof item === "boolean" ){
        boolean.push(item)
      }
        
  
     }
    //  console.log(newArr);
  
  
  
    
    let output =[]
    for (let j = 0; j < number.length; j++) {
      // const element = number[j];
      for (let k = 0; k < number.length; k++) {
        if (number[j]> number [j+1]){
          let temp = number[j]
          number[j]= number[j+1]
          number[j+1]= temp
        }
        
      }
      
    }
    // console.log(number);
  
    let abjad = "abcdefghijklmnopqrstu"
    let string2 = []
  
    for (let x = 0; x < abjad.length; x++) {
      let huruf = abjad[x];
      for (let i = 0; i < string.length; i++) {
        if(string[i][0] === huruf){
          string2.push(string[i])
        }
        
      }
      
    }
    // console.log(string2);
  
    let boolean2 =[]
    for (let u = 0; u < abjad.length; u++) {
      let huruf = abjad[u];
      for (let m = 0; m < boolean.length; m++) {
        // const element = boolean[m];
        let turnString = String(boolean[m]);
        if (turnString[0] === huruf){
          boolean2.push(boolean[m])
        }
        
      }
      
    }
    
    output.push(number,string2, boolean2)
  
    return output
  
  
      
  
  }
  
  
  // console.log(sorting([2, 4, 6, 8, 2, 3]));
  // console.log(sortingByType([1, 3, "array", -45, true, false, "big"]));
  console.log(sortAllClean([undefined, null, 456, "def", NaN, [], true, 123, "bcd", false]));
  
  // [ 2, 2, 3, 4, 6, 8 ]
  // [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]
  // [ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]
  
  
  
  
  
  
  
  
  