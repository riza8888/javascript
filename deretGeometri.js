function tentukanDeretGeometri(arr) {
    let output
    for(let i=0;i<arr.length - 2; i++){
        if (arr[i+1] / arr[i] == arr[i+2]/ arr[i+1]){
            output = true
    
        }else{
          output=false
          break
        }
    
        console.log(arr[i+1],  arr[i], "==", arr[i+2], arr[i+1])
      //  console.log(output);
    
    
    }
    return output
    }
    
    
    
    
    
    console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); //output true (kali 3)
    
    
    // console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); //output true (kali 2)
    
    // console.log(tentukanDeretGeometri([2, 4, 6, 8])); //output false (ditambah 2) atau di kali 2??
    
    
    // console.log(tentukanDeretGeometri([2, 6, 18, 54])); //output true (kali 3)
    
    // console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); //output false (ditambah 1) dikali 2 tapi ga konsisten
    
    // console.log(tentukanDeretGeometri([1, 3, 9, 27, 27, 81])); //output false (dikali 3) tapi ga konsisten
    
    