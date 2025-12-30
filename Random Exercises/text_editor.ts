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