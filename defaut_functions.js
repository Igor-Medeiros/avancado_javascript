// Sem Defaut

function multiply(a, b){
    b = typeof b === 'undefined' ? 1 : b;

    return a * b;
}

console.log(multiply(5, 0));

// Usando Defaut Arguments

function multiply(a, b = 1){
    return a * b;
}

console.log(multiply(5, 5));
console.log(multiply(5));

// Lazy evaluation -> Defaut Arguments

function randomNumber(){
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()){
    return a * b;
}

console.log(multiply(5))