function addAndSubtract(input) {
    let arrOfNumbers = input;
    let modifyNumbersArr = [];
    let firstArrSum = 0;
    let secondArrSum = 0;
    let arrLength = arrOfNumbers.length;

    for(let i = 0; i < arrLength; i++) {
        let currentNumber = arrOfNumbers[i];
        
        firstArrSum += currentNumber;
        let newNumber;

        if(currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
        } else {
            newNumber = currentNumber - i;
        }
        modifyNumbersArr.push(newNumber);
        secondArrSum += newNumber;
    }
    console.log(modifyNumbersArr);
    console.log(firstArrSum);
    console.log(secondArrSum);
}
addAndSubtract([5, 15, 23, 56, 35]);