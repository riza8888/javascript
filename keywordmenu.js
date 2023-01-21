// split string menjadi array
// input => 'kentang goreng keju'
// output => ['kentang', 'goreng', 'keju']
function manualSplit(str) {
    // console.log(str);
    let output =[]
    for (let i = 0; i < str.length; i++) {
      let perFood= str[i]
      let menu = []
      let temp = ""
      
     
      // console.log(perFood.length);
      for (let j = 0; j < perFood.length; j++) {
        // console.log(perFood[j], "===");
    
        if(perFood[j] !== " "){
          temp+= perFood[j]
          // console.log(temp);
        } else if (perFood[j] === " "){
          menu.push(temp)
          
          temp =""
        }
        
        // console.log(menu);
        
      }
      menu.push(temp)
      // console.log(menu);
      output.push(menu)
      
      
    }
    // console.log(output, "===");
    return output
  
  }
  //Pencarian sesuai kata yang diinputkan
  // input => 'goreng'
  // output => ['minyak goreng', 'mie goreng', 'kentang goreng', 'kentang goreng keju']
  function productSearch(arr, keyword) {
      //panggil manual split dan sesuaikan parameternya
      let split = manualSplit(arr)
      console.log(split);
      let hasil = []
      console.log(split.length, "===");
      for (let i = 0; i < split.length; i++) {
        let perArr= split[i]
        // console.log(perArr.length);
        for (let j = 0; j < perArr.length; j++) {
          // console.log(split[i][j],keyword,split[i][j] === keyword, arr[i] );
          if(perArr[j] === keyword){
            // console.log(split[i][j],keyword,split[i][j] === keyword, arr[i] );
            hasil.push(arr[i])
            break;
          }
          
          
        }
        
      }
  
      return hasil
  }
  
  let products = ['minyak goreng', 'mie rebus', 'mie goreng', 'mie pedas', 'sirup jeruk', 'sirup mangga', 'kentang goreng', 'kentang goreng keju', 'keju slice', 'keju parut', 'keju krispi toping keju'];
  
  // panggil function disini dan sesuaikan parameternya
  console.log(productSearch(products, 'goreng'));
  
  /*
  [
    'minyak goreng',
    'mie goreng',
    'kentang goreng',
    'kentang goreng keju'
  ]
  */
  // console.log(productSearch(products, 'keju'));
  
  /*
  
  [
    'kentang goreng keju',
    'keju slice',
    'keju parut',
    'keju krispi toping keju'
  ]
  
  */














  // cara dari open class

















  // function manualSplit(str) {
  //   // Tulis kode disini
  //   let result = [];
  //   let temp = '';
  //   for (let i = 0; i < str.length; i++) {
  //       if (str[i] !== ' ') {
  //           temp += str[i];
  //       }
  //       if (str[i] === ' ' || i === str.length - 1) {
  //           result.push(temp);
  //           temp = '';
  //       }
  //   }
  
  //   // console.log(result);
  //   return result;
  // }
  // function productSearch(arr, keyword) {
  //   //panggil manual split dan sesuaikan parameternya
  
  //   let hasil = []
  //   // console.log(split.length, "===");
  //   for (let i = 0; i < arr.length; i++) {
  //     let split = manualSplit(arr[i])
  //     console.log(split);
  //     // let perArr= split[i]
  //     // console.log(perArr.length);
  //     for (let j = 0; j < split.length; j++) {
  //       // console.log(split[i][j],keyword,split[i][j] === keyword, arr[i] );
  //       if(split[j] === keyword){
  //         // console.log(split[i][j],keyword,split[i][j] === keyword, arr[i] );
  //         hasil.push(arr[i])
  //         break;
  //       }
        
        
  //     }
      
  //   }
  
  //   return hasil
  // }
  // // function productSearch(arr, keyword) {
  // //     // tulis kode disini
  // //     // gunakan function manualSplit disini
  // //     let result = [];
      
  // //     for (let i = 0; i < arr.length; i++) {
  // //       // console.log(manualSplit(arr[i]));
  // //         let split = manualSplit(arr[i]);
  // //         for (let j = 0; j < split.length; j++) {
  // //           // console.log(split[j], "===");
  // //             if (split[j] === keyword) {
  // //                 result.push(arr[i]);
  // //                 break;
  // //             }
  // //         }
  // //     }
  // //     return result;
  // // }
  
  // let products = ['minyak goreng', 'mie rebus', 'mie goreng', 'mie pedas', 'sirup jeruk', 'sirup mangga', 'kentang goreng', 'kentang goreng keju', 'keju slice', 'keju parut', 'keju krispi toping keju'];
  
  // // panggil function disini dan sesuaikan parameternya
  // console.log(productSearch(products, 'goreng'));
  
  // /*
  // [
  //   'minyak goreng',
  //   'mie goreng',
  //   'kentang goreng',
  //   'kentang goreng keju'
  // ]
  // */
  // // console.log(productSearch(products, 'keju'));
  
  // /*
  
  // [
  //   'kentang goreng keju',
  //   'keju slice',
  //   'keju parut',
  //   'keju krispi toping keju'
  // ]
  
  // */