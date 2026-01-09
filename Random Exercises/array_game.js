/**
 * Gloria the bunny finds herself once again amidst an array game. This time, however, the game has slightly intensified with a third array coming into play. Your task is to develop a JavaScript function to maneuver Gloria through her quest, yielding the summation of the maximum values she encounters from arrayB and arrayC together.

Gloria's journey begins at the first element of arrayA. Gloria's movement pattern follows a fixed sequence that repeats: arrayA -> arrayB -> arrayA -> arrayC. In other words, Gloria always alternates between arrayA and either arrayB or arrayC, following this pattern:

    First hop: arrayA to arrayB
    Second hop: arrayB to arrayA
    Third hop: arrayA to arrayC
    Fourth hop: arrayC to arrayA

Then the pattern starts over, continuing until the journey ends.

The rule to decide Gloria's move is: She uses the current element's value in the array as an index for her next array. For example, if Gloria is at arrayA[1]=2, she would move to arrayB[2].

The pattern repeats itself until one of the following occurs:

    Gloria's path repeats, indicating that she is stuck in a loop and cannot progress further, OR
    Gloria tries to access an index that exceeds the length of an array (for example, attempting to access arrayA[4] when arrayA only contains 4 items indexed from 0 to 3), in which case Gloria's journey should also stop.

Your task is to calculate the sum of the maximum values that Gloria encounters in arrayB and arrayC during her journey.

Each input array consists of n items, where n ranges from 11 to 100100, inclusive. Every item in the arrays is a non-negative integer and falls within the range of 00 to 9999, inclusive.

EXAMPLE

Consider arrayA = [2, 1, 3, 0], arrayB = [1, 3, 2, 4], and arrayC = [4, 2, 5, 1]. Gloria's journey would look like:

    She begins at arrayA[0] = 2 which leads her to arrayB[2] = 2.
    She then goes back to arrayA[2] = 3, and then to arrayC[3] = 1.
    She returns to arrayA[1] = 1, then makes a hop to arrayB[1] = 3.
    She goes back to arrayA[3] = 0 and then proceeds to arrayC[0] = 4.
    Now Gloria would go to arrayA[4], however, since arrayA[4] doesn't exist because arrayA` only contains 4 elements indexed from 0 to 3, Gloria's journey stops here.

During her journey, Gloria encounters the maximum value 3 in arrayB and 4 in arrayC. The function should return 7, the sum of these two maximum values.
 */

function solution(arrayA, arrayB, arrayC) {
    let maxB = 0;
    let maxC = 0;
    let isInArrayA = true;
    let isTurnForArrayB = true;
    let indexA = 0;
    let indexB = -1;
    let indexC = -1;
    let indexesB = [];
    let indexesC = [];
    
    while(true){
        if(isInArrayA){
            
            if(isTurnForArrayB){
                indexB = arrayA[indexA];
                if(indexB === undefined || indexB >= arrayB.length || indexesB.includes(indexB)) return maxB+maxC;
                indexesB.push(indexB);
                if(arrayB[indexB] > maxB){
                    maxB = arrayB[indexB];
                }
            }else{
                indexC = arrayA[indexA];
                if(indexC === undefined || indexC >= arrayC.length || indexesC.includes(indexC)) return maxB+maxC;
                indexesC.push(indexC);
                if(arrayC[indexC] > maxC){
                    maxC = arrayC[indexC];
                }
            }
            
        }else{
            
            if(isTurnForArrayB){
                indexA = arrayB[indexB];
            }else{
                indexA = arrayC[indexC];
            }
            if(indexA === undefined || indexA >= arrayA.length) return maxB+maxC;
            isTurnForArrayB = !isTurnForArrayB;
        }
        isInArrayA = !isInArrayA;
    }
}

const arrayA = [2, 1, 3, 0];
const arrayB = [1, 3, 2, 4];
const arrayC = [4, 2, 5, 1];
console.log(solution(arrayA, arrayB, arrayC));