// Given integers a and b, determine whether the following pseudocode results in an infinite loop

// while a is not equal to b do
//   increase a by 1
//   decrease b by 1
// Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

// Example

// For a = 2 and b = 6, the output should be
// solution(a, b) = false;
// For a = 2 and b = 3, the output should be
// solution(a, b) = true.

function solution(a: number, b: number): boolean {
    
    return (a!=b) && (a>b || (b-a)%2!=0)
    
    // if(a!=b){
    //     return (a>b || (b-a)%2!=0) ? true : false;
    // }else{
    //     return false;
    // }
}

console.log(solution(2,6));