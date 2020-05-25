// A parti do ES7 temos o async / await
const asyncTimer = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(32415);
        }, 1000);
    });

const simpleFunc = async () => {
    const data = await asyncTimer();
    console.log(data)
    const dataJSON = await fetch('/data.json')
        .then(resStream => resStream.json()
    );
    return data;
};

simpleFunc().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err);
});