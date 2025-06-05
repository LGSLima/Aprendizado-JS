function adicionarNaTabela() {
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const foto = document.getElementById('foto');
    const arquivoFoto = foto.files[0];
    const agora = new Date();
    const datahora = agora.toLocaleDateString('pt-BR') + ' ' + agora.toLocaleTimeString('pt-BR');
    
    if(nome && endereco && telefone && foto ) {
        const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
        const novaLinha = tabela.insertRow();
        novaLinha.insertCell(0).innerHTML = `<img src="${URL.createObjectURL(arquivoFoto)}">`;
        novaLinha.insertCell(1).innerText = nome;
        novaLinha.insertCell(2).innerText = endereco;
        novaLinha.insertCell(3).innerText = telefone;
        novaLinha.insertCell(4).innerText = datahora;

        // Limpa os campos
        document.getElementById('nome').innerText = '';
        document.getElementById('endereco').innerText = '';
        document.getElementById('telefone').innerText = '';
        foto.value = '';
        novaLinha.onclick = function () {
            if (confirm('Deseja excluir essa linha?')) {
                this.remove();
            }
        }
    } else {
        alert('Insira todos os dados!')
    }
}