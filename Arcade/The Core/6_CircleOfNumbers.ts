// Consider integer numbers from 0 to n - 1 written down along the circle in such a way 
// that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example

// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.

function solution(n: number, firstNumber: number): number {
    
    let solution: number = 0;
    
    solution = Math.floor(n/2)+firstNumber;
    
    if(solution>=n){
        return solution-n;
    }else{
        return solution;  
    }
}

console.log(solution(10,2))