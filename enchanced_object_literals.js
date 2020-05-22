// Forma classica 

var obj = {
    prop1: 'Digital Innovation One'
};

// Usando Enchanced

function method1(){
    console.log('method called');
}

var obj = {
    method1
};

obj.method1();

// Omitindo a Palavra function

var obj = {
    sum (a, b) {
        return a + b;
    }
};

console.log(obj.sum(1, 5));