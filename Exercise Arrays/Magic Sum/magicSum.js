function magicSum(array, magicS) {
 
    let arr = array
    let arrL = arr.length
    let iNum = 0;
    let jNum = 0;
 
    for (let i = 0; i < arrL; i++) {
       iNum = arr[i];
        for (let j = i; j < arrL; j++) {
        jNum = arr[j];
        if (iNum + jNum === magicS && j !== i) {
            console.log(`${iNum} ${jNum}`)
        }
       }
    }
}