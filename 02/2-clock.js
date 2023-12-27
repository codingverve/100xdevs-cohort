// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


function updateclock(){
    const now = new Date;

    let hours=now.getHours().toString().padStart(2,'0');
    let minutes=now.getMinutes().toString().padStart(2,'0');
    let seconds=now.getSeconds().toString().padStart(2,'0');

    const string = `${hours} : ${minutes} :: ${seconds}`;
    document.querySelector(".clock").textContent=string;
    // console.log(string);
}

setInterval(updateclock,1000);

updateclock();

