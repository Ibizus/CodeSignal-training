// Input -> string[]
// Actions -> switch, save 

// Find the branch that has more files in it:

// Example:
// - switch branch 1;
// - save file 1;
// - save file 2;
// - save file 1;
// - switch branch 2;
// - switch branch 3;
// - save file 1;
// - save file 2;
// - save file 3;

// Output -> Branch 3


function handleActions(actions: string[]){
  const branchesContent: Record<string, Set<string>> = {};
  let currentBranch = "";

  for(const action of actions){

    const parts = action.split(" ");
    const command = parts[0].toLowerCase();
    const targetName = parts[parts.length - 1];

    switch (command){
      case "switch":
        currentBranch = targetName;
        if(!branchesContent[currentBranch]){
          branchesContent[currentBranch] = new Set();
        }
        break;
      case "save":
        if(currentBranch){
          branchesContent[currentBranch].add(targetName);
        }
        break;
    }
  }

  // Find branch with most files
  let maxBranch = "";
  let maxFiles = 0;
  for (const [branch, files] of Object.entries(branchesContent)) {
    if (files.size > maxFiles) {
      maxFiles = files.size;
      maxBranch = branch;
    }
  }
  return `Branch ${maxBranch}`;
}

// ====== TESTS ======

// Test 1: Example from the problem
const result1 = handleActions([
  "switch branch 1",
  "save file 1",
  "save file 2",
  "save file 1",
  "switch branch 2",
  "switch branch 3",
  "save file 1",
  "save file 2",
  "save file 3"
]);
const expected1 = "Branch 3";
console.log("Test 1:", result1);
console.log("Pass:", JSON.stringify(result1) === JSON.stringify(expected1) ? "✓" : "✗");
console.log();

// Test 2: Branch 2 has more files
const result2 = handleActions([
  "switch branch 1",
  "save file 1",
  "switch branch 2",
  "save file 1",
  "save file 2"
]);
const expected2 = "Branch 2";
console.log("Test 2:", result2);
console.log("Pass:", JSON.stringify(result2) === JSON.stringify(expected2) ? "✓" : "✗");
console.log();

// Test 3: Branch 1 has more files
const result3 = handleActions([
  "switch branch 1",
  "save file 1",
  "save file 2",
  "save file 3",
  "switch branch 2",
  "save file 1"
]);
const expected3 = "Branch 1";
console.log("Test 3:", result3);
console.log("Pass:", JSON.stringify(result3) === JSON.stringify(expected3) ? "✓" : "✗");
console.log();

// Test 4: Duplicate files shouldn't count
const result4 = handleActions([
  "switch branch 1",
  "save file 1",
  "save file 1",
  "save file 1"
]);
const expected4 = "Branch 1";
console.log("Test 4:", result4);
console.log("Pass:", JSON.stringify(result4) === JSON.stringify(expected4) ? "✓" : "✗");
console.log();

// Test 5: Tie - first branch in iteration order
const result5 = handleActions([
  "switch branch 1",
  "save file 1",
  "switch branch 2",
  "save file 2"
]);
const expected5 = "Branch 1";
console.log("Test 5:", result5);
console.log("Pass:", JSON.stringify(result5) === JSON.stringify(expected5) ? "✓" : "✗");

