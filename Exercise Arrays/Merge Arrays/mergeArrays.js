function mergeArrays(firstList,secondList) {
    let resultList = [];

    for (let i = 0; i < firstList.length; i++) {
        let firtsLIstElement = firstList[i];
        let secondListElement = secondList[i];

        if(i % 2 === 0) {
            let sum = Number(firtsLIstElement) + Number(secondListElement);
            resultList.push(sum);
        }else {
           let result = firtsLIstElement + secondListElement;
           resultList.push(result);
        }
    }
    
    let resultListAsString = resultList.join(` - `);
    console.log(resultListAsString);
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);