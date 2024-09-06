const fs = require('fs');

function printFileContents(filePath) {
  // TODO: Use fs.readFile to read the file contents
  if(fs.existsSync(filePath)){
    fs.readFile(filePath,'utf8',(err,data)=>{
      if(err){
       return console.error(err);
      }
      console.log(data);
    });
  }else{
    console.log(`Column '${filePath}' not found in the CSV`);
  }
}

// TODO: Call printFileContents with the command-line argument
printFileContents('./output.txt')