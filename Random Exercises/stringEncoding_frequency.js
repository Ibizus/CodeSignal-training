/**
 * You are provided with a string of n lowercase English characters, where n ranges from 1 to 500 inclusive. Your task is to return a dictionary where each key-value pair represents a letter k and its corresponding numerical representation v.

The numerical representation v of each character k is computed as follows: replace k with the character that comes three characters before it in the alphabetical order (wrap around to z when this is less than a), then multiply the ASCII value of the new character by the frequency of k in the provided string.

Your function should return a map of the letters in the string and their corresponding numerical representations, sorted in ascending order by the characters.

For example, given the string 'abc', your function should return:

{'a': 120, 'b': 121, 'c': 122}

In this case, we replace 'a' with 'x' and multiply its ASCII value (120) by its frequency (1) to get 120. For 'b', we replace it with 'y' and multiply its ASCII value (121) by its frequency (1) to get 121. And for 'c', we replace it with 'z' and multiply its ASCII value (122) by its frequency (1) to get 122. Then, we sort them based on the characters.
 */

function solution(s) {
    // TODO: Replace the following with your implementation
    // "a" character starts at ASCII value 97
    // Alphabet goes from 0 to 25 characters (26 positions)
    
    const shift = 3;
    const map = {};
    
    for(let char of s){
        const positionInAlphabet = char.charCodeAt(0) - 97;
        const newPosition = (positionInAlphabet - shift + 26) % 26;
        const asciiResulting = newPosition + 97;
        //const charResulting = String.fromCharCode(asciiResulting);
        
        if(map[char]){
            map[char]+= asciiResulting;
        }else{
            map[char] = asciiResulting;
        }
    }
    
    // Convert object to array of [key, value] pairs
    let sorted = Object.entries(map);
    // Sort the array by keys (a[0])
    sorted = sorted.sort((a, b) => a[0].localeCompare(b[0]));
    // Convert back to object
    sorted = Object.fromEntries(sorted);
    return sorted;
}

const text = "abc";
console.log(solution(text));