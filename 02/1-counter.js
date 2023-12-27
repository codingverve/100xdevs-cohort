// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second


let d = new Date;
let Sec = d.getSeconds();
let Hours = d.getHours();
let Minutes = d.getMinutes();

console.log(`${Hours} : ${Minutes} : ${Sec}`);

let counter = 0;

// function updateCounter(){
//     counter ++;
//     console.log("counter : " + counter);
//     setTimeout(updateCounter,1000);
// }

// updateCounter();

function updateCounter(){
    return new Promise((resolve,reject)=>{
            resolve(setTimeout(()=>{
                counter++;
                console.log("counter : " + counter);},1000));
    })
}

updateCounter()


