// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function solution(inputArray: string[]): string[] {
    
    const lengthsArray: number[] = [];
    let max: number = 0;
    const result: string[] = [];
    
    inputArray.forEach((string)=>lengthsArray.push(string.length));
    max = Math.max(...lengthsArray);
    
    inputArray.forEach((str)=>{
        if(str.length == max){
            
            result.push(str);
        }
    })
    return result;
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]));