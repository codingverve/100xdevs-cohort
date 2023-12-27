// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.


// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

function readFile(filename , content){
    fs.writeFile(filename, content , (error, data)=>{
        if(error){
            console.log("can't read the file");
        }

        else{
            console.log("the file data is \n", data );
        }

        performanExpensiveOperation();
    })
}


function performanExpensiveOperation(){
    setTimeout(()=>{
        console.log("this is going to be print after 3sec")
    },3000);
}

readFile("a.txt","this is going to be writtein in text file");