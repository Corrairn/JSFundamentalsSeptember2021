function charactersInRange(first, second) {
    let firstSymbolAsNumber = first.charCodeAt(0);
    let secondSymbolAsNumber = second.charCodeAt(0);
    let smallertNumber = Math.min(firstSymbolAsNumber, secondSymbolAsNumber);
    let biggerNumber = Math.max(firstSymbolAsNumber, secondSymbolAsNumber);
    let result = [];

    for (let i = smallertNumber + 1; i < biggerNumber; i++) {
        let currentElement = String.fromCharCode(i);
        result.push(currentElement);
    }
    console.log(result.join(` `));
}
charactersInRange('a', 'd');