function pagina(){
 
    const container = document.querySelector(".container");
 
    // criando elementos (como a atividade pediu)
    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";
 
    const input = document.createElement("input");
    input.id = "tarefaInput";
    input.type = "text";
    input.placeholder = "Digite uma tarefa";
 
    const botao = document.createElement("button");
    botao.id = "btnAdicionar";
    botao.textContent = "Adicionar";
 
    const lista = document.createElement("ul");
    lista.id = "listaTarefas";
 
    // adicionando na container
    container.appendChild(titulo);
    container.appendChild(input);
    container.appendChild(botao);
    container.appendChild(lista);
 
    // seu código (ajustado só o necessário)
    botao.addEventListener("click", () => {
 
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();
 
        if(texto === ""){
            alert("Digitealgo!");
            return;
        }
 
        novaTarefa.textContent = texto; // adiciona texto ao elemento da lista
        novaTarefa.classList.add('destaque'); // adiciona a classe "destaque ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase()); // adiciona o atributo
        novaTarefa.style.color = "#D333"; // muda a cor do texto
 
        lista.appendChild(novaTarefa); // adiciona o elemento
 
        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("removendo:", tarefa);
 
            novaTarefa.classList.remove("destaque"); // remove a classe
            novaTarefa.classList.add("removido"); // adiciona classe removido
            novaTarefa.innerHTML += " (REMOVIDO)"; // adiciona texto
 
            setTimeout(() => {
                lista.removeChild(novaTarefa);
            }, 1000);
        });
 
        input.value = "";
    });
}
 
// garante que rode depois do HTML carregar
document.addEventListener("DOMContentLoaded", pagina);