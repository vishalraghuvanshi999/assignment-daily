/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve)=>{
    //  // stop doing work 
    //  let start = Date.now();
    //  while(Date.now()- start <milliseconds){
    //         // block the js thread
    //  }  
    
        setTimeout(() => {
           resolve(); 
        },milliseconds);
     
    })
}
 module.exports = sleep; // like our own module that you can use 

sleep(3000).then((msg)=> console.log("done!"));