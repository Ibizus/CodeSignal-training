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

// find the segments lengh:
const maxValue = Math.max(...houses);
// create the array:
const neighborhood = new Array(maxValue).fill(0);
for(let house of houses){
  neighborhood[house] = 1;
}

// create results array
const segmentsResult = [];

for(let query of queries){
  // Destroy the house:
  neighborhood[query] = 0;
  console.log(`neighborhood after query ${query} is: ${neighborhood}`);

  // Find segments:
  let segmentCounter = 0; 
  let previousIsNotHouse = true;
  for(let plot of neighborhood){
    if(plot == 1){
      if(previousIsNotHouse){
        segmentCounter++;
        
      }
      previousIsNotHouse = false;
    }else{
      previousIsNotHouse = true;
    }
  }
  segmentsResult.push(segmentCounter);
}

console.log(segmentsResult);

