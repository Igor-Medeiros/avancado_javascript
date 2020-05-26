// Teste para rodar no mocha

const assert = require('assert');
const Math = require('../avancado_javascript/Testes/mocha.js');

describe('Math class', function(){
    it('Sum two numbers', function(){
        const math = new Math();
        
        try{
            assert.equal(math.sum(5, 5), 10);
        } catch (err) {
            console.log(err)
        }
    });
})


// forma asincrona
describe('Math class', function(){
    it('Sum two numbers', function(done){
        const math = new Math();        
        
        math.sum(5, 5, value => {
            assert.equal(value, 10);
            done();
        });
    });
});

//executando apensa um teste
it.only('Multiply tow numbers', function() {
    const math = new Math();

    assert.equal(math.multiply(5, 5), 25);
})

//futuro teste
it('algum teste futuro');

//pula o teste
it.skip('pulando teste');

//hooks = gerar codigo para evitar repetições

