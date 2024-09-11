// Given an integer n, return the largest number that contains exactly n digits.

// Example

// For n = 2, the output should be
// solution(n) = 99.+

function solution(n: number): number {

    let solution: number = 1;

    for(let i:number = 0; i<n; i++){
        
        solution = solution*10;
    }
    
    return solution-1;
}

console.log(solution(2));