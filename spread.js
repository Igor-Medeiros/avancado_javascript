// Spread Operator pode ser usado em Strings, Array, Literal Objects e Iterator Objects

// ex 1
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
}

console.log(sum(5,5,5,2,3));

// exemplo 2

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);

// Juntando da Array antigamente

const arr = [1,2,3,4];

const arr2 = arr.concat([5,6,7]);

console.log(arr2);

// Usando Spread

const arr = [1,2,3,4];
const arr2 = [...arr,5,6,7];
console.log(arr2);

// Spread Objetos

const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = {...obj, subObj: { ...obj.subObj}};

obj2.subObj.test = 456;

console.log(obj);
console.log(obj2);