function revisao(){
    let nome = "João";
    console.log(nome)
    if (true){
        let sobrenome = "Roccella";

    }
    //console.log(sobrenome); // varivável sobrenome não existe nesse contexto
    const idade = 40;
    console.log(idade);
    //idade = 41

    const precoOriginal = 100;
    const Desconto = 20;
    let precoFinal = precoOriginal - Desconto;

    console.log("Preço Original: " + precoOriginal);
    console.log("Desconto: " + Desconto);
    console.log("Preço Final: " + precoFinal);
}
revisao();