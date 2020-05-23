// Promises
// Promises Pending
const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve('Second data');
    }, 1000);
});

console.log(doSomethingPromise);
console.log(doOtherThingPromise);



// Promises Fulfilled
const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('First data');
        }, 1000);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('Second data');
        }, 1000);
    });

doSomethingPromise
    .then(data => {
        console.log(data);
        return doOtherThingPromise;
    })
    .then(data2 => console.log(data2));    




// Promises Rejected
const doSomethingPromise = () => 
    new Promise((resolve, reject) => {        
        setTimeout(function() {
            resolve('First data');
        }, 1300);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {        
        setTimeout(function() {
            resolve('Second data');
        }, 1000);
    });

Promise.race([doSomethingPromise(), doOtherThingPromise()])
    .then(data => {console.log(data);
});

/*
Promise.all([doSomethingPromise(), doOtherThingPromise()])
    .then(data => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
});

/*
doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise();
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));
