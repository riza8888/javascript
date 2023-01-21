let arrOfObj = [
    {
        name: "andi",
        score: 70
    },
    {
        name: "Budi",
        score: 85
    },
    {
        name: "Candi",
        score: 60
    },
    {
        name: "Dandi",
        score: 65
    },
    {
        nama: "Endra",
        score: 99
    },
    {
        nama: "Fina",
        score: 95
    }
] 

function getMinMax(data) {
    let output = []
    let min = Infinity
    let max = -Infinity
    let objMin={}
    let objMax ={}
    for (let i = 0; i < data.length; i++) {
        let perData =data[i];
        let score =perData.score

        if (score < min){
            min=score
            objMin = perData

        } else if (score>max) {
            max=score
            objMax= perData
        }

       
       
        
    }
    // console.log(objMin,objMax);
    output.push(objMin,objMax)
    

    return output
}

console.log(getMinMax(arrOfObj));

/*
    [ 
        { name: 'Candi', score: 60 }, 
        { nama: 'Endra', score: 99 } 
    ]
*/