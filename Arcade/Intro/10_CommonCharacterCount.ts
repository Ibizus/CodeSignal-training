// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


function solution(s1: string, s2: string): number {

    let count: number = 0;
    
    Array.from(s1).forEach((s)=>{
        if(s2.includes(s)){
            count++;
            s2 = s2.replace(s,'');
        }
    })
    return count;
}

console.log(solution("aabcc", "adcaa"));