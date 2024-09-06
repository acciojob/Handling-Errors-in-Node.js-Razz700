const fs = require('fs');
// const http=require('http');

// const server=http.createServer((req,res)=>{
// console.log('Hello, World!');
// res.write('Hello, World!')
// printFileContents('./output.txt');
// res.end();
// });
// server.listen(3000,'localhost',()=>{
//   console.log('Listening to port 3000')
// });
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
    console.log(`No such file exists`);
  }
}

// TODO: Call printFileContents with the command-line argument
const filePath=process.argv[2];
if(filePath){
  printFileContents(filePath);
}else{
  console.log(`Column '${filePath}' not found in the CSV`);
}