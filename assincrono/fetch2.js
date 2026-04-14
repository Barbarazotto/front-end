const url = "https://jsonplaceholder.typicode.com.br/users";
 
fetch(url)
    .then(resposta => {
        if (!resposta.ok){
            throw new Error("Errona rede: " + resposta.status)
        }
        return resposta.json();
    })
    .then(dados => {
        console.log("dados recebidos: \n", dados);
    })
    .catch( erro => console.error("Houve um problema com a requisição" +
        erro)
)
 