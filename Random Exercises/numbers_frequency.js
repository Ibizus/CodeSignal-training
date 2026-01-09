/**
 * Mike is fascinated by numbers and operations, having devised a unique number encoding scheme. Given an array numbers consisting of n integers, where n ranges from 11 to 100100 inclusive, Mike undertakes the following operations:

    For each number in the array that is not a multiple of 1010, he increases it by 11.
    For each number that is a multiple of 1010, he assigns it a value of 11.

Following these operations, Mike calculates the frequency of each number in the new array. Subsequently, he establishes an association between each number and its frequency. This association maps the number to a product, defined as the multiplication of the number itself by its frequency.

Your task is to generate a list that encompasses these products, organized in ascending order. Each number in the array numbers spans from −100−100 to 100100, inclusive.

For example, given the input array numbers = [5, 10, 15, 10, 5, 15], after applying Mike's operations, we have a resulting array of [6, 1, 16, 1, 6, 16]. The frequency of each number is 6: 2, 1: 2, 16: 2. The corresponding products (number * frequency) are 6*2 = 12, 1*2 = 2, and 16*2 = 32. Therefore, the output is [2, 12, 32], sorted in ascending order.
 */

function transformAndCalculateProducts(numbers) {
    // TODO: implement the function according to the problem statement
    const modifiedArray = [];
    const output = [];
    
    for(number of numbers){
        if(number % 10 === 0){
            modifiedArray.push(1);
        }else{
            modifiedArray.push(number+1);
        }
    }
    console.log({modifiedArray});
    
    // Calculate frequencies:
    const frequencies = {};
    for(number of modifiedArray){
        if(frequencies[number]){
            frequencies[number]++;
        }else{
            frequencies[number] = 1;
        }
    }
    console.log({frequencies});
    
    for (const [number, frequency] of Object.entries(frequencies)) {
        output.push(number * frequency);
    }
    console.log({output});
    output.sort((a, b) => a - b);
    return output;   
}

const numbers = [5, 10, 15, 10, 5, 15];
console.log(transformAndCalculateProducts(numbers));