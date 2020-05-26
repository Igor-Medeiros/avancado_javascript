// primeiro teste
class Math {
    sum = function sum() {};
}

// teste antes de refatorar.
class Math {
    sum = function sum(a, b) {
        return a + b;
    }
}

// refatorar e testar
class Math {
    sum(a, b){
        return a + b;
    }
}

// de forma asincrona
class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 5);
    }
}

module.exports = Math;

