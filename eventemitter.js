/* é algo excluive do node, para usar a classe tem
importa no Node
*/

// sem classe
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
})

emitter.emit('User logged', { user: 'Igor Medeiros' })


// com classe
const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();

// users.once ira logar apenas o primeiro usuario
users.on('User logged', data => {
    console.log(data);
})

users.userLogged({ user: 'Igor Medeiros' })
users.userLogged({ user: 'Priscilla Medeiros' })
