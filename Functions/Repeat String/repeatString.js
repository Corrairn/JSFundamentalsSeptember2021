function repeatString(string, num) {
    let output = "";

    for(let i = 0; i < num; i++) {
        output += string;
    }
    console.log(output);
}
repeatString("abc", 3)