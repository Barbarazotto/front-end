const visualizador = (algo) => console.log(algo);

let minhaPromessa = new Promise((resolve, reject) => {
    let ok = false;

    setTimeout(() => ok = true, 3000);

    //Código que pode demorar um tempo para executar

    if (ok){
        resolve("OK");
    } else {
        reject("Erro");
    }

})

minhaPromessa.then(
    (valor) => visualizador(valor),
    (razao) => visualizador(razao)

)