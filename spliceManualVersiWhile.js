  
  function splice(data, add, start, del) {
    // Insert your code here
    if (!start) {
      start = 0
    }
    if (!del) {
      del = 0
    }
    if (!Array.isArray(data)) {
      return []
    }

    let newArray = []
   

      let i=0
    while(i<data.length){
        let nama = data[i]
  
      //   console.log(nama, dasta[start], i);
      if (i === start) {
        //   console.log(i)
        newArray.push(add)
      }
      // console.log(newArray, "sebelum batas")s
      let batas = start + del
      //  console.log(i, start, batas, nama)
  
      if (i < start || i >= batas) {
        newArray.push(nama)
      }
      //  console.log(newArray)
      i++;
    }
    return newArray
  
  
  }

  

console.log(splice(["idaz", "fajrin", "samir",],"anggara",1,2));
// [ 'idaz', 'anggara' ]

  
  
  
  
  
  
  
  
  /**********************test case*************************/
  console.log(splice(["idaz", "fajrin", "samir",],"anggara",1,2));
  // [ 'idaz', 'anggara' ]
  
  console.log(splice(['eko', 'basil', 'abdullah', 'dear'], 'idaz', 3, 0))
  // [ 'eko', 'basil', 'abdullah', 'idaz', 'dear' ]
  
  console.log(splice([100, 200, 300], '150', 1, 0))
  // [ 100, '150', 200, 300 ]
  
  
  // Test case: function menerima parameter start dan del kosong!
  console.log(splice(['anggara'],'idaz'))
  // [ 'idaz', 'anggara' ]
  
  
  // Test case: function menerima parameter del kosong!
  console.log(splice(['aku', 'kamu'], 'dia', 1))
  // [ 'aku', 'dia', 'kamu' ]
  
  
  // Test case: catch error!
  console.log(splice('aku','dia'))
  // []
  console.log(splice())
  // []