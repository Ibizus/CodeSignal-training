// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

function solution(sequence: number[]): boolean {

    let wrongElement:number = 0;
    
    for(let i=0; i<sequence.length; i++){  
            
        if(sequence[i] >= sequence[i+1]){
            wrongElement++;

            if(wrongElement>1){
                return false;
            }

            if(sequence[i-1] >= sequence[i+1] && sequence[i] >= sequence[i+2]){
                return false;
            }
        }  
    }
    return true;
}

console.log(solution([1, 3, 2, 1]));