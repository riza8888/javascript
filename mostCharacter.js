let word = "aku adalah aku"
word = word.toString().toLowerCase(); //diubah jadi huruf kecil dan string
let hurufTerbanyak = ""; //buat variable kosong untuk nampilin huruf apa yang paling banyak muncul
let jumlahHurufTerbanyak = 0; //buat variable kosong untuk nampilin total kemunculan huruf itu di kalimat tsb

//cek satu satu 
for (let i = 0; i < word.length; i++) {
// pertama mulai dari kalimat index 0, yaitu a
//buat variable untuk nampung string yang udah dipecah
  let hurufYangDicari = word[i] //ini string dipecah jadi satu satu 
// buat variable untuk nampung sementara total kemunculan angka yang udah dipecah satu satu, ex: a akan muncul kali nantinya
  let jumlahPerHuruf = 0
// buat loop 
  for (let j = 0; j < word.length; j++) {
    // console.log(hurufYangDicari, word[j], hurufYangDicari ===word[j])
    if (hurufYangDicari === word[j]) {
      jumlahPerHuruf += 1
    }
  }
  // console.log(hurufYangDicari, jumlahPerHuruf);
  // console.log(i,hurufYangDicari, jumlahPerHuruf, jumlahHurufTerbanyak, jumlahPerHuruf > jumlahHurufTerbanyak)
  if (jumlahPerHuruf > jumlahHurufTerbanyak) {
    jumlahHurufTerbanyak = jumlahPerHuruf
    hurufTerbanyak = hurufYangDicari
  }
}
// console.log(hurufTerbanyak, jumlahHurufTerbanyak)
if (word.length === 1) {
    console.log(`Hanya memiliki satu karakter yaitu ${word}`)
  } else if (jumlahHurufTerbanyak > 10) {
    console.log(`Karakter terbanyak adalah ${hurufTerbanyak} dengan jumlah yang sangat banyak yaitu ${jumlahHurufTerbanyak}`)
  } else if (jumlahHurufTerbanyak > 5 && jumlahHurufTerbanyak <= 10) {
    console.log(`Karakter terbanyak adalah ${hurufTerbanyak} dengan jumlah yang cukup banyak yaitu ${jumlahHurufTerbanyak}`)
  } else if (jumlahHurufTerbanyak <= 5) {
    console.log(`Karakter terbanyak adalah ${hurufTerbanyak} dengan jumlah ${jumlahHurufTerbanyak}`)
  }