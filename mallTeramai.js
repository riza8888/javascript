/**
 * Sebuah Manajer Store sedang melakukan pengecekan tiap mall yang ada di ibukota untuk membuka cabang baru suatu store, diketahui data pengunjung ditiap mallnya.. manajer tersebut ingin mengetahui mall manakah yang memiliki potensi untuk pembukaan cabang tersebut.. bantulah manajer tersebut dengan membuat function yang diminta..
 */

function mallTeramai(data) {
  // Your code here
  // console.log(data);
  let output={}
  let teramai=-Infinity
  for (let i = 0; i < data.length; i++) {
    let perMall = data[i];
    let visitor = perMall.pengunjung
    // console.log(visitor);
    if(visitor> teramai){
      teramai=visitor
      output = perMall

    }

  }
   return output
    
}

// let malls = [
//   { mall: "Grand Indonesia", pengunjung: 400 },
//   { mall: "Central Park", pengunjung: 25 },
//   { mall: "Bekasi Cyber Park", pengunjung: 350 },
//   { mall: "AEON Tangerang", pengunjung: 275 },
//   { mall: "Kota Kasablanka", pengunjung: 500 },
//   { mall: "Mall Kelapa Gading", pengunjung: 50 },
//   { mall: "Lotte Avenue", pengunjung: 150 },
//   { mall: "Senayan City", pengunjung: 175 },
//   { mall: "Pondok Indah Mall", pengunjung: 250 },
//   { mall: "Gandaria City", pengunjung: 50 }
// ]

// console.log(mallTeramai(malls))
/**
 * let malls = [
    { mall: "Grand Indonesia", pengunjung: 400 },
    { mall: "Central Park", pengunjung: 25 },
    { mall: "Bekasi Cyber Park", pengunjung: 350 },
    { mall: "AEON Tangerang", pengunjung: 275 },
    { mall: "Kota Kasablanka", pengunjung: 500 },
    { mall: "Mall Kelapa Gading", pengunjung: 50 },
    { mall: "Lotte Avenue", pengunjung: 150 },
    { mall: "Senayan City", pengunjung: 175 },
    { mall: "Pondok Indah Mall", pengunjung: 250 },
    { mall: "Gandaria City", pengunjung: 50 }
  ]

  console.log(mallTeramai(malls))
  output :
  { mall: "Kota Kasablanka", pengunjung: 500 }
 */

function categoryMall(data) {
  if(!data){return `invalid input`}
  if(data.length<3){return `data tidak lengkap`}
  
  let teramai=mallTeramai(data)

  // console.log(data.length);
  let output={sepi:[], menengah:[], ramai:[]}
   for (let i = 0; i < data.length; i++) {
     let visitor= data[i].pengunjung
    //  console.log(visitor);
    if (visitor<100){
      output["sepi"].push(data[i].mall)
    } else if(visitor >= 400){
      output["ramai"].push(data[i].mall)
    } else{output["menengah"].push(data[i].mall)}
    
   }
   output["mall teramai"]= teramai
   return output
}

let malls = [
  { mall: "Grand Indonesia", pengunjung: 400 },
  { mall: "Central Park", pengunjung: 25 },
  { mall: "Bekasi Cyber Park", pengunjung: 350 },
  { mall: "AEON Tangerang", pengunjung: 275 },
  { mall: "Kota Kasablanka", pengunjung: 500 },
  { mall: "Mall Kelapa Gading", pengunjung: 50 },
  { mall: "Lotte Avenue", pengunjung: 150 },
  { mall: "Senayan City", pengunjung: 175 },
  { mall: "Pondok Indah Mall", pengunjung: 250 },
  { mall: "Gandaria City", pengunjung: 50 },
];

// console.log(categoryMall(malls));
/*
* jika mall hanya memiliki kurang dari 100 pengunjung mall dikatakan sepi
* jika mall memiliki pengunjung 400 keatas mall dikatakan ramai
* selain itu mall masuk dalam kategori menengah
  {
    sepi: [ 'Central Park', 'Mall Kelapa Gading', 'Gandaria City' ],
    menengah: [ 'Bekasi Cyber Park', 'AEON Tangerang','Lotte Avenue', 'Senayan City', 'Pondok Indah Mall'  ],
    ramai: [ 'Grand Indonesia', 'Kota Kasablanka' ],
    mall teramai: { mall: "Kota Kasablanka", pengunjung: 500 }
  }
  */

console.log(
  categoryMall([
    { mall: "Pondok Indah Mall", pengunjung: 250 },
    { mall: "Gandaria City", pengunjung: 50 },
  ])
);
// data tidak lengkap

console.log(categoryMall());
// invalid input
