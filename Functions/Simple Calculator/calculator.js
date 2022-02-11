function calculator(a, b, operator) {
    switch (operator) {
        case `multiply`:
            console.log(a * b);
            break;
        case `divide`:
            console.log(a / b);
            break;
        case `add`:
            console.log(a + b);
            break;
        case `subtract`:
            console.log(a - b);
            break;
    }
}
calculator(5, 5, `multiply`);