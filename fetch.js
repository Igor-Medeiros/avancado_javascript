/* para trabalhar com callback, uma nova API 
chamada Fetch em javascript, so que é ela trabalha 
utilizando promisse sempre fazendo nova request.
*/

fetch('chamado um servidor e o arquivo que deseja')
    .then(responseStream => {
        responseStream.json().then(data => {
            console.log(data);
        })
    });



// Erro de rede
fetch('chamado um servidor e o arquivo que deseja')
    .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Erro: ', err);
    });


// Saber o status de erro
fetch('http://localhost:8080/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json();
        }else{
            throw new Error('Request error');
        }        
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Error: ', err);
    });
