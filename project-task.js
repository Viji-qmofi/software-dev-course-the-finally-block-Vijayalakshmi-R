/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================

function processFile(fileName, fileData) {
  

  try {
    // Step 2: Input Validation
    if (!fileName) {
      throw new ReferenceError("File name is missing!");
    }

    if (typeof fileData !== "string") {
      throw new TypeError("File data must be a string!");
    }

    if (fileData.trim() === "") {
      throw new Error("File data cannot be empty!");
    }

    // Simulate opening a file handle
    
    console.log(`Opening file: ${fileName}`);

    // Step 2: Simulated file processing
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);

    // Step 2: Simulate reading/writing operations
    console.log(`Reading file: ${fileName}...`);
    console.log(`Writing to file: ${fileName}...`);

  } catch (err) {
    // Step 1 & Step 2: Error handling
    console.error("Error occurred:", err.message);

  } finally {
    // Step 3: Always close resources
    console.log("Resources closed (finally block executed).");
  }
}

// ============================================
// 🧪 Test Cases
// ============================================

// Missing file name
console.log("\n---Missing file name---\n");
processFile(); 
// Expect error: "File name is missing!"


console.log("\n---------Valid case---------------\n");

// Valid case
processFile("myFile.txt", "Hello, world!"); 
// Expect successful processing + finally block


console.log("\n-------- Empty file data---------\n");

// Empty file data
processFile("myFile.txt", ""); 
// Expect error: "File data cannot be empty!"

console.log("\n----Non-string file data---\n");

// Non-string file data
processFile("myFile.txt", 42); 
// Expect error: "File data must be a string!"

/*Ouput

---Missing file name---

Error occurred: File name is missing!
Resources closed (finally block executed).

---------Valid case---------------

 Opening file: myFile.txt
 Processing file: myFile.txt
 File content: Hello, world!
 Reading file: myFile.txt...
 Writing to file: myFile.txt...
 Resources closed (finally block executed).

----Non-string file data---

 Resources closed (finally block executed).

-------- Empty file data---------

 Resources closed (finally block executed).
Error occurred: File data must be a string!
Error occurred: File data cannot be empty!*/