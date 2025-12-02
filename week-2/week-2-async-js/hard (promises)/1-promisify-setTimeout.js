/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve,reject)=>{
        if(typeof n !== 'number' || n<0){
            reject('please provide a +ve value');
            return;
        }

        setTimeout(() => {
            resolve(` sec has pass ${n} second`);
        }, n*1000);
    })
}

// module.exports = wait;

wait(4).then((msg)=>{
    console.log(msg);
})
.catch((err)=> console.log(err));