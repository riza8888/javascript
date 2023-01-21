function kotaTersejuk(data) {
    // console.log(data);
    let max = -Infinity;
    let tersejuk;
    for (let i = 0; i < data.length; i++) {
      let perData = data[i];
      // console.log(perData.mdpl);
      if (perData.mdpl > max) {
        max = perData.mdpl;
        tersejuk = perData;
      }
    }
  
    return tersejuk;
  }
  
  function pemetaanSuhu(data) {
    // console.log(data.length);
    if (!data) {
      return `invalid input`;
    }
    if (data.length < 3) {
      return `data tidak lengkap`;
    }
    let tersejuk = kotaTersejuk(data);
    let output = { suhuSejuk: [], suhuSedang: [], suhuTerik: [] };
    // let temp = [];
  
    // for (let i = 0; i < data.length; i++) {
    //   let perData = data[i];
    //   temp.push(Object.values(perData)[1]);
    // }
    // for (let j = 1; j < data.length-1; j++) {
    //   let num = temp[j];
    //   //  console.log(temp[j-1],num, temp[j+1]);
    //   if (num > temp[j - 1] && num > temp[j + 1]) {
    //     output["suhuSejuk"].push(data[j].country);
    //   } else if (num < temp[j - 1] && num < temp[j + 1] ) {
    //     output["suhuTerik"].push(data[j].country);
    //   } else {
    //     output["suhuSedang"].push(data[j].country);
    //   }
    // }
    for (let j = 1; j < data.length-1; j++) {
        let num = data[j].mdpl;
        //  console.log(temp[j-1],num, temp[j+1]);
        if (num > data[j - 1].mdpl && num > temp[j + 1].mdpl) {
          output["suhuSejuk"].push(data[j].country);
        } else if (data[j - 1].mdpl && num < temp[j + 1].mdpl ) {
          output["suhuTerik"].push(data[j].country);
        } else {
          output["suhuSedang"].push(data[j].country);
        }
      }
  
    output["daerahTersejuk"] = tersejuk;
  
    return output;
  }
  
  let countries = [
    { country: "Belanda", mdpl: 400 },
    { country: "China", mdpl: 25 },
    { country: "Jepang", mdpl: 350 },
    { country: "Amerika Serikat", mdpl: 275 },
    { country: "Brazil", mdpl: 650 },
    { country: "Denmark", mdpl: 50 },
    { country: "Venezuela", mdpl: 150 },
    { country: "Argentina", mdpl: 175 },
    { country: "Kanada", mdpl: 250 },
    { country: "Inggris", mdpl: 50 },
  ];
  
  console.log(pemetaanSuhu(countries));
  
  /*
    {
      suhuSejuk: [ 'Jepang', 'Brazil', 'Kanada' ],
      suhuSedang: [ 'Venezuela', 'Argentina' ],
      suhuTerik: [ 'China', 'Amerika Serikat', 'Denmark' ],
      daerahTersejuk: { country: 'Brazil', mdpl: 650 }
    }
    */
  
  // console.log(
  //   pemetaanSuhu([
  //     { country: "Belanda", mdpl: 400 },
  //     { country: "China", mdpl: 25 },
  //   ])
  // );
  // data tidak lengkap
  
  // console.log(pemetaanSuhu());
  // invalid input
  