// <!-- // Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// // clock that shows you the current machine time?

// // Can you make it so that it updates every second, and shows time in the following formats - 

// //  - HH:MM::SS (Eg. 13:45:23)

// //  - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->

// const now = new Date();

// const date = now.getDate();
// const month = now.getMonth();
// const year = now.getFullYear();
// const hours = now.getHours();
// const min = now.getMinutes();
// const sec = now.getSeconds();

// console.log(`date is ${date}`);
// console.log(`month ${month} and year is ${year}`)
// console.log(`current time: ${hours}::${min}::${sec}`); // in 24hour formate

// setInterval(()=>{
//     const now = new Date();
//     const hours = now.getHours();
//     const min = now.getMinutes();
//     const sec = now.getSeconds();

//     console.log(`current time: ${hours}::${min}::${sec}`); // in 24hour formate

// },1000);
// function timr24hour(){

// }

//let hours12 = hours%12 || 12

function timein12hr(){
    const now = new Date();
    let hours = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    // only change the hour 
    let ampm;
    if(hours>=12) ampm = 'PM';
    else ampm = 'AM';

    hours =  hours%12 || 12;
    console.log(`current time: ${hours}::${min}::${sec}`); // in 12hour formate
}

timein12hr();