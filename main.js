const fs = require('fs');
function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  if(fs.existsSync(filePath)){
    fs.readFile(filePath,'utf8',(err,data)=>{
      if(err){
       return console.error(`Error reading file: ${err.message}`);
      }
      console.log(data);
    });
  }else{
    console.log(`Column ${filePath} not found in the CSV`);
  }
}
module.exports={printFileContents}
// TODO: Call printFileContents with the command-line argument
const filePath=process.argv[2];
if(filePath){
  printFileContents(filePath);
}else{
  console.log(`'Error: No file path provided.'`);
}
////////////////////////////////////////////////////////////

// const fs = require('fs');
// const path = require('path');

// // Get the file path from the command-line argument
// const filePath = process.argv[2];

// // Function to read and print file contents
// const readFileAndPrint = (file) => {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       // Handle file read errors
//       if (err.code === 'ENOENT') {
//         console.error(`Error: Column '${path.basename(file)}' not found in the CSV.`);
//       } else {
//         console.error(`Error: Could not read file. ${err.message}`);
//       }
//     } else {
//       // Print file contents to the console
//       console.log(data);
//     }
//   });
// };

// // Check if the file path is provided
// if (!filePath) {
//   console.error('Error: Please provide a file path as a command-line argument.');
// } else {
//   // Resolve the file path and read the file
//   const resolvedFilePath = path.resolve(filePath);
//   readFileAndPrint(resolvedFilePath);
// }


////////////////////////////////////////////////////////////
// const fs = require("fs");

// function readAndParseJSON(filePath) {
//   try {
//     const jsonData = fs.readFileSync(filePath, "utf8");
//     const parsedData = JSON.parse(jsonData);

//     if (
//       typeof parsedData.name === "undefined" ||
//       typeof parsedData.age === "undefined"
//     ) {
//       console.log("Missing required data in the JSON file.");
//       return;
//     }

//     console.log(JSON.stringify(parsedData));
//   } catch (error) {
//     if (error instanceof SyntaxError) {
//       console.log(
//         "Invalid JSON file format. Please provide a valid JSON file."
//       );
//     } else {
//       console.log(`Error reading the file: ${error.message}`);
//     }
//   }
// }

// if (require.main === module) {
//   const filePath = process.argv[2];
//   if (!filePath) {
//     console.log("Please provide a JSON file path.");
//     return;
//   }
//   readAndParseJSON(filePath);
// }

// module.exports = { readAndParseJSON };
