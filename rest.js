// Forma Classica

function sum(a, b){
    var value = 0;

    for (var i = 0; i < arguments.length; i++){
        value += arguments[i];
    }

    return value;
}

console.log(sum(5,5,5,2,3));

//Todo rest operator é escrito com 3 pontos nos argumentos (...args)

function sum(...args){
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5,5,3,2,1));

//Pegando o restante dos argumentos

const sum = (a, b, ...rest) => {
    console.log(a,b,rest);
};

console.log(sum(5,4,2,12,3,4));

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply.apply(undefined, rest);
}

console.log(sum(5,5,5,2,3));