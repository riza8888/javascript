function splitData(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i].groceries);
    let perArr = array[i].groceries;
    let temp = [];
    for (let j = 0; j < perArr.length; j++) {
      let belanja = perArr[j];
      for (let k = 0; k < belanja.length; k++) {
        // console.log(belanja[k]);
        temp.push(belanja[k]);
      }
    }
    // console.log(temp);
    output.push(temp);
  }
  return output;
}

// console.log(
//   splitData([
//     {
//       name: "Samir",
//       groceries: [
//         ["Susu", 2],
//         ["Roti", 4],
//         ["Mie", 5],
//         ["Telur", 2],
//         ["Bakso", 1],
//       ],
//       driveTime: 134, //minutes
//     },
//     {
//       name: "Eko",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Mie", 3],
//         ["Telur", 3],
//         ["Bakso", 2],
//       ],
//       driveTime: 134, //minutes
//     },
//   ])
// );

/**
    expected output :
  
    [
      ["Susu", 2, "Roti", 4, "Mie", 5, "Telur", 2, "Bakso", 1],
      ["Susu", 1, "Roti", 2, "Mie", 3, "Telur", 3, "Bakso", 2],
    ]
  */

function calculateMoney(array) {
  let listGroceries = [
    { name: "Susu", price: 10000 },
    { name: "Roti", price: 20000 },
    { name: "Mie", price: 5000 },
    { name: "Telur", price: 7000 },
    { name: "Sabun", price: 3000 },
    { name: "Bakso", price: 25000 },
  ];

  let output = [];

  for (let i = 0; i < array.length; i++) {
    let arr = array[i];
    // console.log(arr);
    let total = 0;
    for (let j = 0; j < arr.length; j += 2) {
      //   console.log(arr[j]);
      let namaItem = arr[j];
      let jumlahItem = arr[j + 1];
      //   console.log(namaItem, jumlahItem);
      let temp = 0;
      for (let k = 0; k < listGroceries.length; k++) {
        let namaMenu = listGroceries[k].name;
        let harga = listGroceries[k].price;
        // console.log(namaMenu);
        if (namaItem === namaMenu) {
          //   console.log(namaItem, namaMenu);
          //   console.log(jumlahItem, harga);
          temp = jumlahItem * harga;
        }
      }
      //   console.log(temp);
      total += temp;
    }
    // console.log(total);
    output.push(total);
  }

  return output;
}

// console.log(
//   calculateMoney([
//     ["Susu", 2, "Roti", 4, "Mie", 5, "Telur", 2, "Bakso", 1],
//     ["Susu", 1, "Roti", 2, "Mie", 3, "Telur", 3, "Bakso", 2],
//   ])
// );
/*
        expected output:
      
        [164000, 136000]
      */

function calculateDistance(data) {
  let output = [];
  let hasil = 0;
  for (let i = 0; i < data.length; i++) {
    let time = data[i].driveTime;
    // console.log(time);
    // (driverTime x 500) / 1000
    hasil = (time * 500) / 1000;
    // console.log(hasil);
    output.push(hasil);
  }

  return output;
}

// console.log(
//   calculateDistance([
//     {
//       name: "Samir",
//       groceries: [
//         ["Susu", 2],
//         ["Roti", 4],
//         ["Mie", 5],
//         ["Telur", 2],
//         ["Bakso", 1],
//       ],
//       driveTime: 134, //minutes
//     },
//     {
//       name: "Eko",
//       groceries: [
//         ["Susu", 1],
//         ["Roti", 2],
//         ["Mie", 3],
//         ["Telur", 3],
//         ["Bakso", 2],
//       ],
//       driveTime: 134, //minutes
//     },
//   ])
// );

/*
            expected output :
          
            [67, 67]
          */

function reward(array) {
  let output = {};
  let jarakTempuh = calculateDistance(array);
  let uang = calculateMoney(splitData(array));
  for (let i = 0; i < uang.length; i++) {
    let totalUang = uang[i];
    //   console.log(array[i].name);
    //   console.log(totalUang);
    //   console.log(jarakTempuh[i]);

    if (totalUang >= 100000 && jarakTempuh[i] >= 50) {
      if (!output["Rumah"]) {
        output["Rumah"] = [];
      }

      output["Rumah"].push(array[i].name);
    } else if (
      totalUang >= 50000 &&
      totalUang <= 99999 &&
      jarakTempuh[i] >= 20 &&
      jarakTempuh[i] <= 49
    ) {
      if (!output["Mobil"]) {
        output["Mobil"] = [];
      }
      output["Mobil"].push(array[i].name);
    } else {
      if (!output["NoReward"]) {
        output["NoReward"] = [];
      }
      output["NoReward"].push(array[i].name);
    }
  }

  return output;
}

console.log(
  reward([
    {
      name: "Samir",
      groceries: [
        ["Susu", 2],
        ["Roti", 4],
        ["Mie", 2],
      ],
      driveTime: 134,
    },
    {
      name: "Eko",
      groceries: [
        ["Roti", 2],
        ["Mie", 3],
        ["Telur", 3],
        ["Bakso", 2],
      ],
      driveTime: 110,
    },
    {
      name: "Fajrin",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Telur", 3],
      ],
      driveTime: 90,
    },
    {
      name: "Abdullah",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Bakso", 5],
      ],
      driveTime: 120,
    },
    {
      name: "Basil",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Bakso", 2],
        ["Telur", 5],
      ],
      driveTime: 50,
    },
    {
      name: "Idaz",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Mie", 3],
        ["Telur", 3],
        ["Bakso", 1],
      ],
      driveTime: 100,
    },
  ])
);

/*   
              {
                Rumah: [ 'Samir', 'Eko', 'Abdullah', 'Idaz' ],
                Mobil: [ 'Fajrin' ],
                NoReward: [ 'Basil' ]
              }
              */

console.log(
  reward([
    {
      name: "Samir",
      groceries: [
        ["Susu", 2],
        ["Roti", 4],
        ["Mie", 5],
        ["Telur", 2],
        ["Bakso", 1],
      ],
      driveTime: 134, //minutes,
    },
    {
      name: "Eko",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Mie", 3],
        ["Telur", 3],
        ["Bakso", 2],
      ],
      driveTime: 134, //minutes,
    },
    {
      name: "Fajrin",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Bakso", 2],
        ["Telur", 3],
      ],
      driveTime: 90, //minutes
    },
    {
      name: "Abdullah",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Bakso", 5],
      ],
      driveTime: 120, //minutes,
    },
    {
      name: "Basil",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
        ["Bakso", 2],
        ["Telur", 5],
      ],
      driveTime: 40, //minutes
    },
    {
      name: "Idaz",
      groceries: [
        ["Susu", 1],
        ["Roti", 2],
      ],
      driveTime: 10, //minutes
    },
  ])
);

/*
                expected output :
              
                {
                Rumah: [ 'Samir', 'Eko', 'Abdullah' ], 
                NoReward: [ 'Fajrin', 'Basil', 'Idaz' ]
                }
              */
