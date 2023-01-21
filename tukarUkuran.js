function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    let output = ""
    for (let i = 0; i < kalimat.length; i++) {
      let huruf = kalimat[i];
      // console.log(huruf);
      if(huruf === huruf.toUpperCase()){
          output += huruf.toLowerCase()
      } else if(huruf === huruf.toLowerCase()){
        output += huruf.toUpperCase()
      }
      // console.log(huruf, huruf.toUpperCase, huruf === huruf.toUpperCase);
    }
  
    return output
  }
  
  
  console.log(tukarBesarKecil("Hello World"));
  // hELLO wORLD
  
  
  // let test = "abc"
  // let test1 = test[0] === test[0].toUpperCase
  
  // console.log(test1);
  