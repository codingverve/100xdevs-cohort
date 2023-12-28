// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```



const fs = require("fs");

function readFirst(filename){
    fs.readFile(filename ,'utf-8' ,(error,data)=>{
        if(error){
            console.log("cant read");
        }

        else{
            const mainContent = Modified(data);
        

        fs.writeFile(filename , mainContent, (error,data)=>{
            if(error){
                console.log("cant write the data");
            }
            else{
                console.log("Successfully updated");
            }
        })
    }})
}

function Modified(rd){
    let finalStr=rd.replace(/ \s/g,"");
    return finalStr;
}

readFirst("main.text")
