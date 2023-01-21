/*
    buatlah sebuah function split yang akan menerima 2 parameter, str (string) dan param (string). Function ini berfungsi untuk memisahkan string menjadi array dimana param adalah parameter pemisahnya.

    contoh
    input: 
    - str: 'i love javascript'
    - param: ' '
    output: ['i', 'love', 'javascript'];

    contoh 2
    input:
    - str: 'javascript is so cool'
    - param: 'i'
    output: ['javascr', 'pt ', 's so cool']

    // s so cool
    // [javascr, pt , s so cool]
*/

function split(str, param) {
    let output = []
    let string = ""
    for (let i = 0; i <= str.length; i++) {
        let perStr = str[i];
        // console.log(perStr);

        if (perStr === param || perStr === undefined){
            
            output.push(string)
            string = ""
        } else if(perStr !== param) {// && pestr !== undefined
            string += perStr
        }
       
        
        
    }

    // console.log(string);

    return output
}

// console.log(split('i love javascript', ' ')); // ['i', 'love', 'javascript']
console.log(split('javascript is so cool', 'i')); // ['javascr', 'pt ', 's so cool']
