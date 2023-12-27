/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, n*1000);
    });
}

function waitTwoSecond(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, n*1000);
    });
}

function waitThreeSecond(n) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, n*1000);
    });
}


async function calculateTime(t1,t2,t3) {  
    const before = Date.now();
    const ffff = await Promise.all([
        waitOneSecond(t1),
        waitTwoSecond(t2),
        waitThreeSecond(t3)
    ]);
    const after = Date.now();
    const difference = after - before
    // console.log(diffrence);
    return difference;

}

calculateTime();
module.exports = calculateTime;

// Example usage:


