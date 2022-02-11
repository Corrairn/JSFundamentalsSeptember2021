function solve(input) {
    for (let name of input) {
          let person = {
              name:name,
              number:name.length
          }
          console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}





solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )