// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

function solution(inputArray: number[]): number {

    let largestProduct: number = 0;
    
    for(let i=1; i<=inputArray.length; i++){
        
        const product: number = inputArray[i-1] * inputArray[i];
        
        if(i===1){
            largestProduct = product;
        }else if(product>largestProduct){
            largestProduct = product;
        }
    }
    
    return largestProduct;
}

console.log(solution([3, 6, -2, -5, 7, 3]));