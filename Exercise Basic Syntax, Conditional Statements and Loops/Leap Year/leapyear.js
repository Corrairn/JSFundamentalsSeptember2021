function leapYear(year) {
    if (year === 1900) {
        console.log("no");
    } else if (year % 4 === 0 || year % 400 === 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
leapYear(1900);