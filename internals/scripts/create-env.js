const fs = require('fs');

console.log(process.env.CLIENT_ID);
console.log(process.env.CLIENT_SECRET);
const path = './.env';
const data = `CLIENT_ID=${process.env.CLIENT_ID}\nCLIENT_SECRET=${process.env.CLIENT_SECRET}`;

fs.open(path,'r',function(err, fd){
  if (err) {
    fs.writeFile(path, data, function(err) {
      if(err) {
        console.log(err);
      }
      console.log("The file was saved!");
    });
  } else {
    console.log("The file exists!");
  }
});
