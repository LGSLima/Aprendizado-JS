function adicionarNaTabela() {
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const serie = document.getElementById('serie').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const nomeResp = document.getElementById('nomeResp').value;
    const matr = document.getElementById('matr').value;
    const obs = document.getElementById('obs').value;

    if (nome && email && data && cpf && serie && telefone && endereco && nomeResp && matr && obs) {
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        const valorLinha = tabela.insertRow();
        valorLinha.insertCell(0).innerText = nome;
        valorLinha.insertCell(1).innerText = data;
        valorLinha.insertCell(2).innerText = serie;
        valorLinha.insertCell(3).innerText = email;
        valorLinha.insertCell(4).innerText = telefone;
        valorLinha.insertCell(5).innerText = endereco;
        valorLinha.insertCell(6).innerText = nomeResp;
        valorLinha.insertCell(7).innerText = cpf;
        valorLinha.insertCell(8).innerText = matr;
        valorLinha.insertCell(9).innerText = obs;

        document.getElementById('nome').innerText = '';
        document.getElementById('data').innerText = '';
        document.getElementById('serie').innerText = '';
        document.getElementById('email').innerText = '';
        document.getElementById('cpf').innerText = '';
        document.getElementById('endereco').innerText = '';
        document.getElementById('telefone').innerText = '';
        document.getElementById('nomeResp').innerText = '';
        document.getElementById('matr').innerText = '';
        document.getElementById('obs').innerText = '';

        valorLinha.onclick = function() {
            if (confirm('Deseja remover essa linha?')) {
                this.remove();
            }
        }

        } else {
        alert('Preencha todos os dados antes de adicionar!')
    }
}