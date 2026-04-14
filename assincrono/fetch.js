async function buscarDados(){
    try{
        const resposta = await fetch ("https://jsonplaceholder.typicode.com/users");

        if(!resposta.ok){ //Verificar se a resposta foi bem-sucedida (200-299)
            throw new Error("Erro na rede  " + resposta.status);
        }
        const dados = await resposta.json(); //converte a resposta em JSON
        console.log(dados);
    } catch (erro){
        console.error("Houve um problemaa com a requisição: ", erro);
    }
}
buscarDados();