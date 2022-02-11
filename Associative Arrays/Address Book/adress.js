function address(input) {
    let adressBook = {};

    for(let entry of input) {
        entry = entry.split(":");
        let name = entry[0];
        let adress = entry[1];
        adressBook[name] = adress;
    }

    let sortedArr = Object.entries(adressBook);
    sortedArr.sort((a,b) => {
        keyA = a[0];
        keyB = b[0];

        return keyA.localeCompare(keyB);
    })

    for(sortedEntry of sortedArr) {
        console.log(`${sortedEntry[0]} -> ${sortedEntry[1]}`);
    }


}




address(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);