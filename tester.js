



// console.log('sudah terkoneksi')
let total = 0;

function stress(data){
    // console.log(data);
    return (data/30)*10



}


function changePage(num) {
    // pilih elementnya
    // console.log(prev);
    if (num) {
        total += num;
    }
    let hasilKalkulasi = Math.ceil(stress(total))

    return hasilKalkulasi


}

console.log(changePage(30));