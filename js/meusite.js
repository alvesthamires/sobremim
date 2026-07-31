const form = document.getElementById("form-feedback");
const inputNome = document.getElementById("nome");  
const inputComentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem-feedback");
const listaComentarios = document.getElementById("lista-comentarios");


form.addEventListener("submit", function(event){
    event.preventDefault();


  // value -> captura o conteúdo inserido na caixa
  //trim -> limpa espaços no início ou no fim
    const nomeDigitado = inputNome.value.trim();
    const comentarioDigitado = inputComentario.value.trim();


    if(nomeDigitado === "" || comentarioDigitado === ""){
        // Regra do erro
        mensagem.textContent = "ERRO: Preencha todos os campos!";
        mensagem.style.color = "red";
        } else {
        // Regra do sucesso
        mensagem.textContent = "Feedback enviado com sucesso";
        mensagem.style.color = "green";
    }
     
    //criando tag com HTML
    const novoItem = document.createElement("li");


    //inserindo texto no li
    novoItem.textContent = `${nomeDigitado} disse: ${comentarioDigitado}`;


    //adiciona o li como filho da ul do HTML
    listaComentarios.appendChild(novoItem);




    //Limpeza dos campos
    inputNome.value = "";
    inputComentario.value = "";
});
