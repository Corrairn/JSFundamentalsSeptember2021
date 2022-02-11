function negativeOrPositiveNumbers(input) {
    let arr = [];

    for(let num of input) {
        if(num < 0 ) {
            arr.unshift(num);
        } else {
            arr.push(num);
        }
    }

    console.log(arr.join("\n"));

}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
console.log("---------");
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);