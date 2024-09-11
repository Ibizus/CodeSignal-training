// COUNT THE BUILDINGS SEGMENTS AFTER EVERTY QUERY:

// Given an array of houses like houses = [1, 2, 3, 6, 7, 9] and an array of queries like q=[1, 3, 6, 9], 
// return an array of how many segments exist after each query. 
// Each query indicates the house that will be destroyed and the queries are executed in order.

// A segment refers to a consecutive group of houses. There can technically be one house in a segment 
// if there are no other house that are consecutive to it(it doesn't have neighbors), however it is still one segment.

// As can be seen the house indexes match up. Before any queries there are 3 segments(they are bolded) 
// After the first query, the house at index 2 will be destroyed.

const houses: number[] = [1, 2, 3, 6, 7, 9];
const queries: number[] = [1, 3, 6, 9];

function countBuildings(houses: number[], queries: number[]): number[] {
    let segments: number[] = [];
    let max = Math.max(...houses);
    let printedHouses: number[] = new Array(max+1).fill(0);

    for (let i = 0; i < houses.length; i++) {
        if(houses[i] > 0) {
            printedHouses[houses[i]] = 1;
        }
    }

    for (let i = 0; i < queries.length; i++) {
        printedHouses[queries[i]] = 0;
        segments.push(countSegments(printedHouses));
    }

    return segments;
}

function countSegments(printedHouses: number[]): number {
    let count: number = 0;
    
    if(printedHouses[0] === 1 && printedHouses[1] === 0) {
        count++;
    }
    for (let i = 1; i < printedHouses.length; i++) {
        if(printedHouses[i] === 1 && printedHouses[i - 1] === 0) {
            count++;
        }
    }
    return count;
}

console.log(countBuildings(houses, queries));