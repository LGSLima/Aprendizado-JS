function adicionarNaTabela() {
    // Recebe os valores dos campos de entrada do formulário
    const nomeCri = document.getElementById('nomeCri').value;
    const fotoCri = document.getElementById('fotoCri');
    const dataNasc = document.getElementById('dataNasc').value;
    const nomeRes = document.getElementById('nomeRes').value;
    const fotoRes = document.getElementById('fotoRes');
    const tel = document.getElementById('tel').value;
    const info = document.getElementById('info').value;

    // Guarda as imagens selecionadas nos vetores
    const criFoto = fotoCri.files[0];
    const resFoto = fotoRes.files[0];

    // Obtém a data e hora atual do registro
    const agora = new Date();
    const datahora = agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR');
    
    // Verifica se todos os campos obrigatórios foram preenchidos
    if (nomeCri && fotoCri && dataNasc && nomeRes && fotoRes && tel) {
        
        // Obtém a tabela onde os registros serão inseridos
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        // Adiciona uma nova linha na tabela
        const novaLinha = tabela.insertRow(); 
        
        // Insere os dados nas células correspondentes
        novaLinha.insertCell(0).innerText = nomeCri;
        novaLinha.insertCell(1).innerHTML = `<img src="${URL.createObjectURL(criFoto)}">`;
        novaLinha.insertCell(2).innerText = dataNasc;
        novaLinha.insertCell(3).innerText = nomeRes;
        novaLinha.insertCell(4).innerHTML = `<img src="${URL.createObjectURL(resFoto)}">`;
        novaLinha.insertCell(5).innerText = tel;
        novaLinha.insertCell(6).innerText = info;
        novaLinha.insertCell(7).innerText = datahora;

        // Limpa os campos do formulário para novos cadastros
        document.getElementById('cadastroForm').reset();

        // Adiciona evento de exclusão ao clicar na linha
        novaLinha.onclick = function () {
            if (confirm('Deseja excluir essa linha?')) {
                this.remove(); // Remove o registro da tabela
            }
        };

    } else {
        alert('Insira todos os dados!'); // Alerta caso algum campo esteja em branco
    }
}