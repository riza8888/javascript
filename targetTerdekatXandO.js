function targetTerdekat(arr) {
    // you can only write your code here!
    let hasil = 0
    let lokasiO=0
    let lokasiX =0
    let flagO = false
    let flagX = false
  
    for (let i = 0; i < arr.length; i++) {
      let perArr = arr[i];
      // console.log(perArr);
      
      if (perArr === "o") {
        lokasiO = i;
        flagO =true
      } else if(perArr === "x"){
        lokasiX = i
        flagX =true
     
      }
      
      if (flagO && flagX){break;}
    }
    
    if (!lokasiX ){return 0}
    if (lokasiX > lokasiO){hasil = lokasiX- lokasiO;} 
    else if(lokasiO> lokasiX){hasil = lokasiO-lokasiX}
  
   
    
    // console.log(typeof lokasiO, "--");
  
   return hasil;
  }
  
  // console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"]));
  //output 3
  //maka jarak terdekat dari 'o' ke 'x' adalah 3. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
  
  // console.log(targetTerdekat([" ", " ", "o", " "]));
  
  console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "]));