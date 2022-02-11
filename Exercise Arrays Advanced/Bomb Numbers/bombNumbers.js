function bombNumbers(sequence, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];

    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);
        let elementsToEemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;

        if (startIndex < 0) {
            elementsToEemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToEemove);
    }
    let finalResult = sequence.reduce((a, b) => {
        return a + b;
    }, 0)
    console.log(finalResult);
}


bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
);