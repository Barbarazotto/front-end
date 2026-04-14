const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("capturedImage");
const botao = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

//solicitar acesso à câmera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(erro => {
        console.error("Erro ao acessar a câmera: ", erro);
    });

//atribuir uma função para o botão de captura 
botao.addEventListener("click", () => {
    //desenhar o quadro atual do vídeo no área do canvas
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);

    //obter a imagem como um URL de dados
    const imagemDataURL = canvas.toDataURL("image/png");
    //enviar a imagem para um servidor
    enviarImagemParaServidor(imagemDataURL)
})
function enviarImagemParaServidor(imagemDataURL){
    //simular o envio da imagem para um servidor
    console.log("Enviando imagem para o servidor...");

    fetch("/", {
        method: "POST",
        body:JSON.stringify({ imagem: imagemDataURL }),
        headers: {
            "Content-Type": "application/json"
        }
    })
}