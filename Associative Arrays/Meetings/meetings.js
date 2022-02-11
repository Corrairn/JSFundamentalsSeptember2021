function meetings(input) {
    let calendar = {};

    for(let entry of input) {
        entry = entry.split(" ");
        let weekday = entry[0];
        let person = entry[1];

        if(calendar.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            calendar[weekday] = person
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for(let asscoKey in calendar) {
        console.log(`${asscoKey} -> ${calendar[asscoKey]}`);
        
    }
}




meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)