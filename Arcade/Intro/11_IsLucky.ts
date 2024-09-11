// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

function solution(n: number): boolean {
    let firstHalf: number = 0;
    let secondHalf: number = 0;
    const stringNumber: string = JSON.stringify(n);
    
    for(let i: number = 0; i<Math.floor(stringNumber.length/2); i++){
        
        firstHalf += Number(stringNumber[i]);
        secondHalf += Number(stringNumber[stringNumber.length-1-i]);
    }
    
    return firstHalf === secondHalf;
}

console.log(solution(239017));