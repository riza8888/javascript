/*
    note: format output => [ MAX, MIN, AVG ]
*/
function getMinMaxAvg(numbers) {
    let min = numbers[0][0] //bisa pake let min = infinity
    let max = numbers [0][0] //bisa pake let max = -infinity
    let sum = 0
    let avg = 0
    let perlantai;
    let counter = 0
    
    for (let i =0; i< numbers.length; i++){
        perlantai = numbers[i]
        for (let j = 0 ; j< perlantai.length; j++){
            sum +=perlantai[j]
            counter ++
            if (perlantai[j]< min){
                min =perlantai[j]
            }

            if (perlantai[j]> max){
                max =perlantai[j]
            }

        }
    }

    avg = sum/counter
    let result =[]
    result.push(max)
    result.push(min)
    result.push(avg)

    return result
    
}

let arr = [
    [6, 5, 10, 76, 88],
    [3, 1, 2, 13],
    [55, 6],
    [9, 7, 5],
    [9]
]

console.log(getMinMaxAvg(arr)); // [ 88, 1, 19.666666666666668 ]

let arr2 = [
    [3, 5, 100, 87],
    [4, 5, 2, 7, 9, 10],
    [8, 7, 37, 4]
]

console.log(getMinMaxAvg(arr2)); // [ 100, 2, 20.571428571428573 ]
