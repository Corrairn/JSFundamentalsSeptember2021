function calculator(number, operator, number2) {
    let result;
    
    if(operator === `+`) {
        result = number + number2;
    } else if (operator === `-`) {
        result = number - number2
    } else if(operator === `*`) {
        result = number * number2;
    } else if (operator === `/`) {
        result = number / number2;
    }

    console.log(result.toFixed(2));
}
calculator(5, '+', 10);