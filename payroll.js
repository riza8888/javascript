
  
  function payroll(monthlyAbsen) {
   if (!monthlyAbsen) {
     return `Invalid data!`
   } else if (monthlyAbsen.length < 4) {
     return `Data absen tidak lengkap!`
   }
  
   let jumlahHadir = 0 
   let jumlahTerlambat = 0
   let lamaLembur=0
   let jumlahBolos = 0
   let jumlahCuti = 0
   let jumlahSakit =0

   for (let i = 0; i < monthlyAbsen.length; i++) {
    let arr = monthlyAbsen[i]
    for (let j = 0; j < arr.length; j++) {
      // console.log(arr[j]); 
      if(arr[j] === "H" || arr[j] === "T" || arr[j][0]=== "L"){
        jumlahHadir++
      }

      if (arr[j][1] === "S") {
        jumlahSakit++
      }

      if(arr[j] === "T"){
        jumlahTerlambat++
      } 

      if (arr[j][0] === "L"){
        lamaLembur += arr[j][1] 
      }

      if (arr[j][1] === "B") {
        jumlahBolos++
      }

      if (arr[j][1] === "C") {
        jumlahCuti++if (jumlahHadir >=24){gaji += 500_000}
    if (jumlahTerlambat >= 1){
      gaji = gaji - (50_000 * jumlahTerlambat)
    }
    if(lamaLembur >=1){gaji += (50_000*lamaLembur)}
   if(jumlahBolos >=1 ){gaji -= (200_000*jumlahBolos)}
   
    return  `Absensi Bulan ini :
    Hadir: ${jumlahHadir}
    Sakit: ${jumlahSakit}
    Terlambat: ${jumlahTerlambat}
    Alpa: ${jumlahBolos}
    Cuti: ${jumlahCuti}
    Lembur: ${lamaLembur} jam
    Gaji yang anda terima bulan ini adalah Rp. ${gaji}`
    
    
      }
    }
   }

    let gaji = 5_000_000
  
  
    
  
  }
  
  
  // let januari = [ 
  //   [ "H","H","H","T","H","H" ],
  //   [ "H","H",["A","C"],"H","H","H" ],
  //   [ "H","H","H","H","H","H" ],
  //   [ "H","H","H","H",["A","S"],"H" ]
  // ]
  
  // let februari = [
  //   [ "H","H","H","H",["L",3],"H" ],
  //   [ "H","H","H","H","H","H" ],
  //   [ "H",["L",2],"H","H","H","H" ],
  //   [ "H","H","H","H","H","H" ]
  // ]
  
  let maret = [ 
    [ "H","H","H","H","H","H" ],
    [ ["A","B"],"H","H","H","H","H" ],
    [ "H","H","T","H","H","H" ],
    [ "H","H","H","H",["A","B"],"H" ]
  ]
  
  
  
  // let april = [[ "H","H","H","H","H","H" ]]
  
  // console.log(payroll(januari))    
  /*
  Absensi Bulan ini :
  Hadir: 22
  Sakit: 1
  Terlambat: 1
  Alpa: 0
  Cuti: 1
  Lembur: 0 jam
  Gaji yang anda terima bulan ini adalah Rp. 4950000.
  */
  // console.log(payroll(februari))   
  /*
  Absensi Bulan ini :
  Hadir: 24
  Sakit: 0
  Terlambat: 0
  Alpa: 0
  Cuti: 0
  Lembur: 5 jam
  Gaji yang anda terima bulan ini adalah Rp. 5750000.
  */
  console.log(payroll(maret))      
  /*
  Absensi Bulan ini :
  Hadir: 22
  Sakit: 0
  Terlambat: 1
  Alpa: 2
  Cuti: 0
  Lembur: 0 jam
  Gaji yang anda terima bulan ini adalah Rp. 4550000.
  */
  // console.log(payroll(april))      
  // Data absen tidak lengkap!
  // console.log(payroll())           
  // Invalid data!
  