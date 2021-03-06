function solve(input) {
    let listOfCompanies = {};

    for(let item of input) {
        let[company,number] = item.split(" -> ");

        if(!listOfCompanies.hasOwnProperty(company)) {
            listOfCompanies[company] = [];
        }

        if(!listOfCompanies[company].includes(number)) {
            listOfCompanies[company].push(number);
        }
    }
    
    let sorterCompanies = Object.keys(listOfCompanies);
    sorterCompanies.sort((a,b)=>a.localeCompare(b));

    for(let company of sorterCompanies) {
        console.log(company);
        for(let emp of listOfCompanies[company]) {
            console.log(`-- ${emp}`);
        }
    }
}



solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );