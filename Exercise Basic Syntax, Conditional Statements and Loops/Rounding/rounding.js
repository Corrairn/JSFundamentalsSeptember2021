function rounding(number,percision) {
    if(percision > 15) {
        percision = 15;
    }

    let rounded = number.toFixed(percision);
    let withoutZeroz = parseFloat(rounded);
    console.log(withoutZeroz);
}
rounding(10.5,3);