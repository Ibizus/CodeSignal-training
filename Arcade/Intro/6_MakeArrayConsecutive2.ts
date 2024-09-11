// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
// each statue having an non-negative integer size. 
// Since he likes to make things perfect, he wants to arrange them from smallest to largest 
// so that each statue will be bigger than the previous one exactly by 1. 
// He may need some additional statues to be able to accomplish that. 
// Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

function solution(statues: number[]): number {
    
    let max:number = statues[0];
    let min:number = statues[0];
    
    for(let i=0; i<statues.length; i++){
        if(statues[i]>max){
            max = statues[i];
        }
        if(statues[i]<min){
            min = statues[i];
        }
    }
    
    return (max-min+1)-statues.length;
}

console.log(solution([6, 2, 3, 8]));