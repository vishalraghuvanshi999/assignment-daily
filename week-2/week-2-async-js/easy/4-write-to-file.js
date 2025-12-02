// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.writeFile("a.txt","hello write there i'm here","utf-8",function(err,data){
    if(err){
        console.log("error writing file",err);
        return;
    }
    console.log("file written succesfully")
})