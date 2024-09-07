// const fs = require('fs');
// function printFileContents(filePath) {
//   // TODO: Use fs.readFile to read the file contents
//   if(fs.existsSync(filePath)){
//     fs.readFileSync(filePath,'utf8',(err,data)=>{
//       if(err){
//        return console.error(err);
//       }
//       console.log(data);
//     });
//   }else{
//     console.log(`Column ${filePath} not found in the CSV`);
//   }
// }
// module.exports={printFileContents}
// // TODO: Call printFileContents with the command-line argument
// const filePath=process.argv[2];
// if(filePath){
//   printFileContents(filePath);
// }else{
//   console.log(`Column ${filePath} not found in the CSV`);
// }
////////////////////////////////////////////////////////////
const http = require('http');
const fs = require('fs');
const path = require('path');

// Get the file path from the command-line argument
const filePath = process.argv[2];

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Read the file contents
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle error (file not found or other issues)
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end(`Error: Could not read file. ${err.message}`);
      return;
    }
    // Serve the file contents
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Serving file: ${path.resolve(filePath)}`);
});



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
