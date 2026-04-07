function pagina(){
    const input = document.getElementById("tarefaInput");
    const botao = document.getElementById("btnAdicionar");
    const lista = document.getElementById("listaTarefas");

    botao.addEventListener("click", ()=>{
        //Criar novo elemento da lista
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();

        if(texto === ""){
            alert("Digite algo!");
            return;
        }

        novaTarefa.textContent = texto; //Adicionar texto ao elemento da lista
        novaTarefa.classList.add('destaque'); //Adicionar classe "destqeu" ao li.
        novaTarefa.setAttribute("data-tarefa", texto.toLoweCase()); //Adicionar atributo
        novaTarefa.style.color = "#333"; //muda a cor do texto 

        lista.appendChild(novaTarefa); //adicionar elemento.

        //Evento para remover item ao clicar
        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destaque"); //Destaque a classe html destaque
            novaTarefa.classList.add("removido"); //acrescenta a classe html removido
            novaTarefa.innerHTML += "(removida)"; //acrescenta o texto (removida) ao texto da tarefa
            setTimeout(() =>{lista.removeChild(novaTarefa) }); 

        })

    });
}