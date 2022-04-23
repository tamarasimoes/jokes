const mensagem = document.getElementById('resposta');
const botao = document.getElementById('botao');
const input = document.getElementById('input_nome');

const resposta = () => {
    let respostaMensagem;
    if (input.value === 'Marina' || input.value === 'marina') {
        respostaMensagem = `Que bobajaaaada viu gente`;
    }
    else if (input.value === 'Alef' || input.value === 'alef' || input.value === 'lefin') {
        respostaMensagem = `Força, jovem!`;
    }
    else if (input.value === 'Gean' || input.value === 'gean' || input.value === 'leao' || input.value === 'leão' || input.value === 'Leão' || input.value === 'Leao') {
        respostaMensagem = `Brahma? Heineken? Perto da Uaimií, é água!`;
    }
    else if (input.value === 'Dodo' || input.value === 'Dodô' || input.value === 'Douglas') {
        respostaMensagem = `Toca Orochi, essa é de bicho`;
    }
    else if (input.value === 'Cida' || input.value === 'cida') {
        respostaMensagem = `Marina!!!! Quer morrer?`;
    }
    else if (input.value === 'Andréia' || input.value === 'Andreia') {
        respostaMensagem = `Eu vou mata esse prefeito`;
    }
    else if (input.value === 'Tamara') {
        respostaMensagem = `Pisa no celelador!`;
    }
    else if (input.value === 'Felício' || input.value === 'Felicio') {
        respostaMensagem = `Tá na hora de tomar uma`;
    }
    else if (input.value === 'Helena' || input.value === 'helena') {
        respostaMensagem = `Cadê o rap do Naruto?`;
    }
    else {
        respostaMensagem = alert('Erro: Essa pessoa não faz parte da Família Buscapé');
    }

    mensagem.innerHTML = respostaMensagem;
}

botao.addEventListener('click', resposta);
