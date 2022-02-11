function solve(input) {
    let production = new Map();
    let arrLength = input.length;

    for(let i = 0; i < arrLength; i+=2) {
        let current = input[i];
        let quantity = Number(input[i + 1]);

        if(!production.has(current)) {
            production.set(current,0);
        }
        let updateQuantity = production.get(current);
        updateQuantity+=quantity;
        production.set(current,updateQuantity);
    }

    for(let item of production) {
        console.log(`${item[0]} -> ${item[1]}`);
    }
    
}





solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );