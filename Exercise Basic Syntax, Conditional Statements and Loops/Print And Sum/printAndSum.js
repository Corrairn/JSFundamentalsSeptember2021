function printAndSum(startNumber,endNumber) {
    let resultString = ``;
    let sum = 0;

    for(let i = startNumber; i <= endNumber; i++) {
        resultString += ` ${i}`;
        sum += i;
    }

    console.log(resultString);
    console.log(`Sum: ${sum}`);
}
printAndSum(0,26);