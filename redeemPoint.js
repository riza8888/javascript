function getPoints(history) {
  let itemPoint = {
      'Moonlight': 120,
      'Goldqueen': 550,
      'Beras Parist': 1200,
      'Minyak Fatma': 2500
  };
  let output={}
 let belanjaan={}
  let belajaanUser =history.histories
  // console.log(belajaanUser);
  for (let i = 0; i < belajaanUser.length; i++) {
      // console.log(belajaanUser[i]);
      if(!output["totalPoint"]){
          output["totalPoint"]=0
      }
      if(!belanjaan[belajaanUser[i]]){
          belanjaan[belajaanUser[i]]=0
      }
      belanjaan[belajaanUser[i]]++
      output["totalPoint"]+= itemPoint[belajaanUser[i]]
      
  }
  output.belanjaanReport = belanjaan
  // console.log(output);
 
  return output
}

function getPrizes(point) {
  let listPrize = [
      [2000, 'Voucher 10k', 'Sticker', 'Penggaris' ],
      [5000, 'Voucher 25k', 'Kinderboy', 'Tissue', 'Piring'],
      [10000, 'Payung', 'Panci']
  ];
  
  // console.log(point["totalPoint"]);
  let userPoint = point["totalPoint"]
  // console.log(userPoint);


  let hadiah = [];
  for (let i = 0; i < listPrize.length; i++) { 
    for (let j = 1; j < listPrize[i].length; j++) { 
      // console.log(listPrize[i][0]);
      if (userPoint >= listPrize[i][0]) { 
        hadiah.push(listPrize[i][j]); 
        userPoint -= listPrize[i][0]; 
      }
    }
  }

  // console.log(hadiah);
  return hadiah;

}

function betamart(pembeli) {
  let belanja =getPoints(pembeli)
  let hadiah =getPrizes(getPoints(pembeli))
  // console.log(belanja);
  let output = {}
  // console.log(pembeli.name);
  output.name = pembeli.name
  output.belanjaanReport= belanja.belanjaanReport
  output.prizes= hadiah

  // console.log(output);

  return output

 


}


console.log(
    betamart({
        name: 'Ilham',
        histories: [
            'Moonlight',
            'Goldqueen',
            'Beras Parist',
            'Moonlight',
            'Goldqueen',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Goldqueen',
            'Goldqueen',
            'Moonlight',
            'Beras Parist',
            'Beras Parist',
            'Minyak Fatma',
            'Minyak Fatma',
            'Moonlight',
            'Moonlight'
        ]
    })
)

/*
{
  name: 'Ilham',
  belanjaanReport: { Moonlight: 6, Goldqueen: 4, 'Beras Parist': 4, 'Minyak Fatma': 5 },
  prizes: [ 'Voucher 10k', 'Sticker', 'Penggaris', 'Voucher 25k', 'Kinderboy' ]
}
*/

// console.log(
//     betamart({
//         name: 'Kosasih',
//         histories: [
//             'Moonlight',
//             'Moonlight',
//             'Goldqueen',
//             'Moonlight',
//             'Minyak Fatma',
//             'Goldqueen',
//             'Beras Parist',
//             'Beras Parist',
//             'Beras Parist',
//             'Moonlight',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Moonlight',
//             'Goldqueen',
//             'Goldqueen',
//             'Goldqueen',
//             'Beras Parist',
//             'Moonlight',
//             'Moonlight',
//             'Beras Parist',
//             'Beras Parist',
//             'Minyak Fatma',
//             'Minyak Fatma',
//             'Goldqueen',
//             'Goldqueen',
//             'Moonlight',
//             'Moonlight',
//             'Moonlight',
//             'Moonlight'
//         ]
//     })
// )

/*
{
  name: 'Kosasih',
  belanjaanReport: { Moonlight: 11, Goldqueen: 7, 'Minyak Fatma': 5, 'Beras Parist': 6 },
  prizes: [
    'Voucher 10k',
    'Sticker',
    'Penggaris',
    'Voucher 25k',
    'Kinderboy',
    'Tissue'
  ]
}
*/

// console.log(betamart());
// Tidak ada pembeli yang belanja