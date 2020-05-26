const assert = require('assert');
const Math = require('../avancado_javascript/Tests/math.js');
const expect = require('chai').expect

let value = 0;

describe('Math class', function(){
    //hooks
    beforeEach(function() {
        value = 0
    })

    it('Sum two numbers', function(done){
        const math = new Math();        
        
        value = 5;

        math.sum(5, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });
});

//executando apensa um teste
it.only('Multiply tow numbers', function() {
    const math = new Math();
    const obj = {
        name: 'Igor de Medeiros'
    };

    expect(obj).to.have.property('name').equal('Igor de Medeiros');
})

//futuro teste
it('algum teste futuro');

//pula o teste
it.skip('pulando teste');

//hooks = gerar codigo para evitar repetições