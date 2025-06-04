function adicionarNaTabela() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const email = document.getElementById('email').value;
    const data = document.getElementById('data').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && sobrenome && email && data && cpf && rg && telefone) {
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        const valorLinha = tabela.insertRow();
        valorLinha.insertCell(0).innerText = nome;
        valorLinha.insertCell(1).innerText = sobrenome;
        valorLinha.insertCell(2).innerText = email;
        valorLinha.insertCell(3).innerText = data;
        valorLinha.insertCell(4).innerText = cpf;
        valorLinha.insertCell(5).innerText = rg;
        valorLinha.insertCell(6).innerText = telefone;

        document.getElementById('nome').innerText = '';
        document.getElementById('sobrenome').innerText = '';
        document.getElementById('email').innerText = '';
        document.getElementById('data').innerText = '';
        document.getElementById('cpf').innerText = '';
        document.getElementById('rg').innerText = '';
        document.getElementById('telefone').innerText = '';
    } else {
        alert('Preencha todos os dados antes de adicionar!')
    }
}