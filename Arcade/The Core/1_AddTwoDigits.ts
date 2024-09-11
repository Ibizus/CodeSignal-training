// You are given a two-digit integer n. Return the sum of its digits.

// Example

// For n = 29, the output should be
// solution(n) = 11.

function solution(n: number): number {
    
    let sum: number = 0;
    
    do{
        sum += n%10;
        n= Math.floor(n/10);
        
    }while(n%10>0);
    
    return sum;
}

console.log(solution(29));