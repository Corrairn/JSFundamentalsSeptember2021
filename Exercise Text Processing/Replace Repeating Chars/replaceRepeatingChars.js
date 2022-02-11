function solve(str) {
    let result = "";

    for(let char of str) {
        if(char !== result[result.length -1]) {
            result += char;
        }
    }
    console.log(result);
}



solve('aaaaabbbbbcdddeeeedssaa');