function reading(bookPages,pagesForHour,days) {
    let totalTime = bookPages / pagesForHour;
    let requiredHours = totalTime / days;
    console.log(requiredHours);
}
reading(432,15 ,4);