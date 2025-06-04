function adicionarNaTabela() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    if(nome && endereco && telefone) {
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).innerText = nome;
        novaLinha.insertCell(1).innerText = endereco;
        novaLinha.insertCell(2).innerText = telefone;

        // Limpa os campos
        document.getElementById('nome').innerText = '';
        document.getElementById('endereco').innerText = '';
        document.getElementById('telefone').innerText = '';
        novaLinha.onclick = function () {
            if (confirm('Deseja excluir essa linha?')) {
                this.remove();
            }
        }
    } else {
        alert('Insira todos os dados!')
    }
}