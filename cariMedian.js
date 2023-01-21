function cariMedian(arr) {
    // console.log(arr);
    let median = 0;
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    if (arr.length % 2 === 0) {
        console.log(arr);
        let tengah1=arr[arr.length/2]
        let tengah2=arr[(arr.length/2)-1]
        median= (tengah1+tengah2)/2
    } else if (arr.length % 2 !== 0) {
      median = arr[Math.floor(arr.length / 2)];
      // console.log(Math.floor(arr.length/2));
    }
    //   console.log(median);
    return median;
  }
  
  console.log(cariMedian([1, 3, 4, 10, 12, 13]));
  //7
  
  // console.log(cariMedian([3, 4, 6, 7, 10]));
  //6
  