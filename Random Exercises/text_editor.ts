// Input -> string[]
// Actions -> 
//     - write "" (write)
//     - backspace (delete one)
//     - undo (delete previous action)

// Example: 
// - write "cod"    -> cod
// - backspace      -> co
// - undo           -> cod
// - undo           -> ""
// - backspace      -> does nothing
// - write "Hi"     -> Hi

// Output: string[]
// ["cod", "co", "cod", "", "Hi"]

function textEditor(actions: string[]): string[] {
  const result: string[] = [];
  let currentIndex = -1;  // pointer to current position in result

  for (let action of actions) {

    let currentText = currentIndex >= 0 ? result[currentIndex] : "";

    switch (action) {
      case "undo":
          currentIndex--;
          if (currentIndex < 0) currentIndex = -1;
          currentText = currentIndex >= 0 ? result[currentIndex] : "";
          result.push(currentText);
        break;
      case "backspace":
          const newText = currentText.slice(0, currentText.length - 1);
          result.push(newText);
          currentIndex = result.length - 1;
        break;
      default: // "write HELLO"
          const textToWrite = action.slice(6);
          result.push(currentText + textToWrite);
          currentIndex = result.length - 1;
          break;
    }
  }

  return result;
}

// ====== TESTS ======

function runTests() {
  console.log("Running tests...\n");

  // Test 1: Example from the problem
  const test1 = ["write cod", "backspace", "undo", "undo", "backspace", "write Hi"];
  const expected1 = ["cod", "co", "cod", "", "", "Hi"];
  const result1 = textEditor(test1);
  console.log("Test 1 (Example from problem):");
  console.log("Input:", test1);
  console.log("Expected:", expected1);
  console.log("Got:     ", result1);
  console.log("Pass:", JSON.stringify(result1) === JSON.stringify(expected1) ? "✓" : "✗");
  console.log();

  // Test 2: Simple write
  const test2 = ["write Hello", "write World"];
  const expected2 = ["Hello", "HelloWorld"];
  const result2 = textEditor(test2);
  console.log("Test 2 (Consecutive writes):");
  console.log("Input:", test2);
  console.log("Expected:", expected2);
  console.log("Got:     ", result2);
  console.log("Pass:", JSON.stringify(result2) === JSON.stringify(expected2) ? "✓" : "✗");
  console.log();

  // Test 3: Multiple backspaces
  const test3 = ["write abc", "backspace", "backspace", "backspace"];
  const expected3 = ["abc", "ab", "a", ""];
  const result3 = textEditor(test3);
  console.log("Test 3 (Multiple backspaces):");
  console.log("Input:", test3);
  console.log("Expected:", expected3);
  console.log("Got:     ", result3);
  console.log("Pass:", JSON.stringify(result3) === JSON.stringify(expected3) ? "✓" : "✗");
  console.log();

  // Test 4: Backspace on empty string
  const test4 = ["backspace", "write test"];
  const expected4 = ["", "test"];
  const result4 = textEditor(test4);
  console.log("Test 4 (Backspace on empty):");
  console.log("Input:", test4);
  console.log("Expected:", expected4);
  console.log("Got:     ", result4);
  console.log("Pass:", JSON.stringify(result4) === JSON.stringify(expected4) ? "✓" : "✗");
  console.log();

  // Test 5: Multiple undos at start
  const test5 = ["undo", "undo", "write x"];
  const expected5 = ["", "", "x"];
  const result5 = textEditor(test5);
  console.log("Test 5 (Undos at start):");
  console.log("Input:", test5);
  console.log("Expected:", expected5);
  console.log("Got:     ", result5);
  console.log("Pass:", JSON.stringify(result5) === JSON.stringify(expected5) ? "✓" : "✗");
}

runTests();