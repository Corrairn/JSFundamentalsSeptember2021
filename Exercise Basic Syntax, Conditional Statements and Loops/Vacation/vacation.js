function vacation(grouppeople, typegroup, dayweek) {
    let result = 0;
    if(typegroup === "Business" && grouppeople >= 100) {
        grouppeople-= 10;
    }
    if(typegroup === "Students" && dayweek === "Friday") {
        result = grouppeople * 8.45;
    } else if (typegroup === "Students" && dayweek === "Saturday") {
        result = grouppeople * 9.80;
    } else if (typegroup === "Students" && dayweek === "Sunday") {
        result = grouppeople * 10.46;
    } else if (typegroup === "Business" && dayweek === "Friday") {
        result = grouppeople * 10.90;
    } else if(typegroup === "Business" && dayweek === "Saturday") {
        result = grouppeople * 15.60;
    } else if (typegroup === "Business" && dayweek === "Sunday") {
        result = grouppeople * 16;
    } else if (typegroup === "Regular" && dayweek === "Friday") {
        result = grouppeople * 15;
    } else if (typegroup === "Regular" && dayweek === "Saturday") {
        result = grouppeople * 20;
    } else if (typegroup === "Regular" && dayweek === "Sunday") {
        result = grouppeople * 22.50;
    }

    if(typegroup === "Students" && grouppeople >= 30) {
        result= result * 0.85;
    } else if(typegroup === "Regular" && grouppeople >= 10 && grouppeople <= 20) {
        result= result * 0.95;
    }
    
    console.log(`Total price: ${result.toFixed(2)}`);
}
vacation(40,"Regular","Saturday");