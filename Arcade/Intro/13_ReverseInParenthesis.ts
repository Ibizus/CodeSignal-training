// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well-formed with matching ()s.

// Example:

// For inputString = "(bar)", the output should be
// solution(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// solution(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// solution(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// solution(inputString) = "foobazrabblim".
// Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

function solution(inputString: string): string {
    
    const solution: string[] = [...inputString];
    let indexes: number[] | null = [];
    
    while((indexes = findParentheses(solution)) !== null){
        reverseAndErase(solution, indexes);
    }
    
    return solution.join('');
}

function findParentheses(inputString: string[]): number[] | null{ 
    let first: number | null = null;
    for(let i: number = 0; i<inputString.length; i++){     
        if(inputString[i]==='('){
            first=i;
        }else if(inputString[i]===')' && first!==null){
            return [first, i];
        }
    }
    return null;
}

function reverseAndErase(inputString: string[], indexes: number[]){
    const reversed: string[] = inputString.slice(indexes[0]+1, indexes[1]).reverse();
    inputString.splice(indexes[0], indexes[1]-indexes[0]+1, ...reversed);
}

console.log(solution("(bar)"));