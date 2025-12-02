// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


let counter = 0;

function setinterval(){
    setTimeout(() => {
        counter++;
        console.log(counter);
        setinterval();
    }, 1000);
}


setinterval();





































































// (Hint: setTimeout)