function palindroneIntegers(listOfNumbers) {
    for(let number of listOfNumbers) {
        let numberAsString = number.toString();
        let reversedNumberAsString = numberAsString.split(``).reverse().join(``);
        
        if(numberAsString === reversedNumberAsString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
palindroneIntegers([123,323,421,121]);