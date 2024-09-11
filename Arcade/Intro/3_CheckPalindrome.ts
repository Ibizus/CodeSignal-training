// Given the string, check if it is a palindrome.

// Example:

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

function solution(inputString: string): boolean {

    let reversed: string = "";
    
    for(let i:number=inputString.length; i>=0; i--){
        reversed+=inputString.charAt(i);
    } 
    return (reversed === inputString);
}

console.log(solution("aabaa"));
