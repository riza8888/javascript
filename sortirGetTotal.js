function sorting(arrNumber) {
  
    for (let i = 0; i < arrNumber.length; i++) {
      // const element = arrNumber[i];
      for (let j = 0; j < arrNumber.length; j++) {
          if (arrNumber[j] > arrNumber[j+1] ){
            let temp = arrNumber[j]
            arrNumber[j]= arrNumber[j+1]
            arrNumber[j+1] = temp
          }   
        
      }
      
    }
    // console.log(arrNumber);
  
    return arrNumber
  
  
  }
  
  function getTotal(arrNumber) {
    let max = -Infinity
    let count =0
    let array = sorting(arrNumber)
     for (let i = 0; i < array.length; i++) {
      // console.log(array[i]);
      if (array[i]> max)(
        max = array[i]
      
      )
     }
  
   
    for (let j = 0; j < array.length; j++) {
      // const element = array[j];
      if(array[j] === max){
        count++
      }
      
    }
      return `angka paling besar adalah ${max} dan jumlah kemunculan sebanyak ${count} kali`
    
  }
  
  console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]));
  // angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali
  
  // console.log(sorting([]));
  