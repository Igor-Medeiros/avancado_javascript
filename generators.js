// sem generators

function hello(){
    console.log('Hello');
    console.log('From');
    console.log('Function');
}

hello();

// com generators

function* hello(){
    console.log('Hello');
    yield;

    console.log('From');
    const value = yield 223;

    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Sair'));

// usando para pegar ranges

function* naturalNumbers(){
    let number = 0;
    while(true){
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// generators com symbols

const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){
        for (var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }        
    }
};

for (let value of obj) {
    console.log(value);
}