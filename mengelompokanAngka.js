function mengelompokkanAngka(arr) {
  
    let output =[]
    let ganjil =[]
    let genap=[]
    let kelipatanTiga =[]
    // let check = false
    for(let i=0; i<arr.length; i++){
      // console.log(arr[i]);
      let num = arr[i]
      //cari genap
     
     if (num % 2 === 0 && num %3 !==0){ 
        genap.push(num) 
    
        
       
      } else if (num % 2 !== 0 && num %3 !==0){
        ganjil.push(num) 
     
        
      } else if(num % 3 ===0){
        kelipatanTiga.push(num)
       
      }
    
    }
    output.push(genap, ganjil, kelipatanTiga)
    // console.log(genap, ganjil, kelipatanTiga);
    
    
    // console.log(output);
  
    return output
  }


  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]



// kelompok pertama (baris pertama) merupakan angka-angka genap 
// kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil 
// kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3

/*
cari kelipatan 3 dulu
baru ganjil dan genap



*/