function splice(data, add ,start, del) {
    // Insert your code here
    //mulai validasi
    if(!start){start=0}
    if(!del){del=0}
    if (!Array.isArray(data)){ return []}
    //selesai validasi
    let newArray =[]

      for (let i =0; i< data.length; i++){
          let nama= data[i]

        //   console.log(nama, dasta[start], i);
          if(i === start){
            //   console.log(i)
            newArray.push(add)
            // if (del =0)
            
          } 
            // console.log(newArray, "sebelum batas")
          let batas = start+del // ini supaya bisa ngapus
            //  console.log(i, start, batas, nama)
    
          if (i < start || i >= batas){
            newArray.push(nama)
        }
            //  console.log(newArray)

        }
    return newArray
  }

//   inget disini satu looping bisa push 2 data

  /* 
  penjelasan test case satu
  1. apakah index idaz sama dengan start yang ada di function a.k.a angka 1 (tidak, jadi dia masuk ke ke if berikutnya )
  2. apakah index idaz kurang dari index start/ 1 (karna itu nama idaz ke push ke empty newArray)
  3. next ke index berikutnya, karna idaz udah terpenuhi
  4. index selajutnya adalah fajrin (index 1)
  5. apakah fajrin(1) sama dengan start(1 dari input function) (see if pertama)
  6. iya, karna dari itu input add yang ada di function (anggara) dimasukin ke newArray
  7. jangan lupa cek fajrin (the real index 1), langsung ke if kedua (apakah 1 kurang dari start(index 1), tidak, mereka equal, karna itu si fajrin ga dimasukin)
  8. kita cek index selanjutnya, yaitu samir (index 2), apakah samir (index 2) kurang dari start(1) (TIDAK, makannya ga masuk)
  9. apakah samir (index 2), apakah lebih dari batas (start+del, di case ini 1+2 =3). jadi apakah 2 lebih dari 3? BUKAN, makanya ga dimasukin
  10. begitu seterusnya
  */


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