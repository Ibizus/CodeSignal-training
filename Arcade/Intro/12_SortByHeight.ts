// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function solution(a: number[]): number[] {
    
    const people: number[] = a.filter((e)=>e!=-1);
    people.sort((a,b)=>a-b);

    let peopleOrder: number = 0;
    for(let i:number = 0; i<a.length; i++){
        
        if(a[i]!=-1){
            a[i] = people[peopleOrder];
            peopleOrder++;
        }
    }
    
    return a;
}

console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));