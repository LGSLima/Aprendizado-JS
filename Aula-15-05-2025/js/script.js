// Variável global para armazenar temporariamente o valor do pedido
var valorTemp = 0;

// Função para calcular o valor total do pedido
function valorPedido() {
    // Obtém o elemento de quantidade e converte seu valor para um número inteiro
    const quant = document.getElementById('quantidade');
    var quantidade = parseInt(quant.value);
    var valorCopo = 0;

    // Define o valor do copo com base na opção selecionada
    if (document.getElementById('300ml').checked) {
        valorCopo = 8.00;
    }
    if (document.getElementById('500ml').checked) {
        valorCopo = 12.00;
    }
    if (document.getElementById('1l').checked) {
        valorCopo = 20.00;
    }

    // Calcula o valor final do pedido
    var valorFinal = quantidade * valorCopo;

    // Se o cálculo resultar em um valor inválido, define como 0
    if (isNaN(valorFinal)) {
        valorFinal = 0;
    }

    // Se o valor for negativo, exibe um modal de erro e impede a continuidade
    if (valorFinal < 0) {
        modal('erro');
        quantidade.value = '';
        return;
    }

    // Atualiza o valor total do pedido na interface
    document.getElementById('valorTotal').innerHTML = `${valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
    
    // Armazena temporariamente o valor final do pedido
    valorTemp = valorFinal;
}

// Função para finalizar o pedido
function finalizarPedido() {
    // Obtém o valor do pedido exibido na tela
    let valorPedido = document.getElementById('valorTotal').textContent;

    // Verifica se há produtos no pedido antes de permitir a finalização
    if (valorPedido === 'R$ 0,00' || valorPedido <= 0) {
        modal('finalizar-erro');
        return;
    }

    // Exibe o modal de confirmação de pagamento e reseta os valores
    modal('finalizar');
    resetarPedido();
}

// Função para resetar o pedido e limpar os dados
function resetarPedido() {
    // Reseta a variável global de valor temporário
    valorTemp = 0;

    // Define o valor total do pedido como R$ 0,00 na interface
    document.getElementById('valorTotal').textContent = 'R$ 0,00';

    // Verifica se o elemento da lista de produtos existe antes de modificar seu conteúdo
    const listaProdutos = document.getElementById('produtoLista');
    if (listaProdutos) {
        listaProdutos.textContent = 'Nenhum produto selecionado';
    }

    // Reseta os campos de entrada numérica para evitar dados persistentes
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');

    // Reseta o campo de seleção de produto para a opção inicial
    const select = document.getElementById('produto');
    if (select) {
        select.selectedIndex = 0;
    }

    // Marca a opção padrão do tamanho do copo como `300ml`
    document.getElementById('300ml').checked = true;
}

// Função para exibir modais de alerta e mensagens
function modal(tipo) {
    var modalContent = ''; // Variável que armazenará o conteúdo do modal
    var valor = valorTemp; // Obtém o valor temporário do pedido

    // Define o conteúdo do modal com base no tipo solicitado
    switch (tipo) {
        case 'erro':
            modalContent = `
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Erro!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>O valor é inválido.</p>
                </div>
            `;
            break;

        case 'finalizar-erro':
            modalContent = `
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Erro!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>Não é possível finalizar o pedido, pois nenhum produto foi adicionado ao carrinho ou nenhuma forma de pagamento foi selecionada.</p>
                </div>
            `;
            break;

        case 'finalizar':
            modalContent = `
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">Pagamento finalizado!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>Valor do pedido: ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>
                    <p>Obrigado por comprar com a gente. Volte sempre!</p>
                </div>
            `;
            break;

        default:
            alert('Tipo de modal inválido'); // Alerta caso um tipo desconhecido seja passado
            break;
    }

    // Insere o conteúdo no modal e exibe para o usuário
    document.getElementById('modalAlertaContent').innerHTML = modalContent;
    
    // Mostra o modal
    const modal = new bootstrap.Modal(document.getElementById('modalAlerta'));
    modal.show();
}