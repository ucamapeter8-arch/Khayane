 alert("O sistema da Psychosolutions foi carregado!"); 

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
   

    let totalPontos = 0;
    
    // Pega todas as perguntas (divs) que você criou
    const blocosPerguntas = document.querySelectorAll('.bloco-pergunta');

    // Percorre cada pergunta para ver o que foi marcado
    blocosPerguntas.forEach((bloco) => {
        // Procura o input radio que está marcado (checked) dentro deste bloco
        const selecionado = bloco.querySelector('input[type="radio"]:checked');

        if (selecionado) {
            // Pegamos a lista de todos os inputs desta pergunta
            const opcoes = Array.from(bloco.querySelectorAll('input[type="radio"]'));
            
            // indexOf nos dá a posição: 
            // Se for o 1º (Raramente), soma 0. 
            // Se for o 2º (Às vezes), soma 1. 
            // Se for o 3º (Sempre), soma 2.
            totalPontos += opcoes.indexOf(selecionado);
        }
    });

    // Agora enviamos o total para a função que mostra o resultado na tela
    mostrarResultado(totalPontos);
});

function mostrarResultado(pontos) {
    const container = document.getElementById('resultado-container');
    const titulo = document.getElementById('titulo-resultado');
    const mensagem = document.getElementById('texto-resultado');

    container.style.display = 'block'; // Faz a caixa de resultado aparecer

    // Lógica de decisão (igual ao if/else do Java)
    if (pontos <= 7) {
        titulo.innerText = "Nível Equilibrado";
        mensagem.innerText = "Você está lidando bem com suas emoções no momento.";
        container.style.borderColor = "SeaGreen";
    } else if (pontos <= 14) {
        titulo.innerText = "Sinal de Alerta";
        mensagem.innerText = "Cuidado com o excesso de tarefas. Tente descansar mais.";
        container.style.borderColor = "GoldenRod";
    } else {
        titulo.innerText = "Nível Crítico";
        mensagem.innerText = "A pressão está muito alta. Seria ideal procurar ajuda profissional.";
        container.style.borderColor = "IndianRed";
    }
}