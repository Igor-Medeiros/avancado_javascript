// Symbols
// Uma maneira de gerar um identificador unico.
// Symbol é um identificador unico que não pode ser descrito
// Pode ser gerado propriedades privadas com Symbols

const uniqueID = Symbol('Hello');
//const uniqueID2 = Symbol('Hello');

//console.log(uniqueID === uniqueID2)

const obj = {
    [uniqueID]: 'Hello'
};

console.log(obj);

// Well known symbols

Symbol.iterator // gera um interface de interação do meu array
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One';

const obj = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };                
            }
        };
    }
};

const it = obj[Symbol.iterator]();

for (let value of obj){
    console.log(value);
}

/* // Spred Operator
const arr2 = [...arr];
console.log(arr2)

// Nova forma pelo ecma6
for (let value of str){
    console.log(value);
}

/* Forma antiga

const it = arr[Symbol.iterator]();

while (true){
    let { value, done } = it.next();

    if (done){
        break;
    }
    console.log(value);
}
*/