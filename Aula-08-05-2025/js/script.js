// Variáveis globais para armazenar o valor total e final do pedido
var valorTotal = 0;
var valorFinal = 0;
var produtoExistente = [];

// Função para adicionar produto ao pedido
function adicionarProduto(nomeProduto) {
    // Obtém a quantidade do produto a partir do input
    let quantidadeProduto = parseInt(document.getElementById('qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-')).value);
    let valorProduto = 0;

    // Verifica se a quantidade é válida
    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        modal('erro');
        return;
    }

    // Define o valor do produto conforme o nome
    switch (nomeProduto) {
        case 'X-Bacon':
            valorProduto = 15.90;
            break;
        case 'X-Salada':
            valorProduto = 16.90;
            break;
        case 'X-Tudo':
            valorProduto = 17.90;
            break;
        case 'X-Completo':
            valorProduto = 24.90;
            break;
        case 'X-Bacon A':
            valorProduto = 22.90;
            break;
        case 'X-Salada A':
            valorProduto = 20.90;
            break;
        case 'X-Tudo A':
            valorProduto = 25.90;
            break;
        case 'X-Completo A':
            valorProduto = 28.90;
            break;
        case 'File Bacon':
            valorProduto = 17.90;
            break;
        case 'File Salada':
            valorProduto = 19.90;
            break;
        case 'File Tudo':
            valorProduto = 20.90;
            break;
        case 'File Completo':
            valorProduto = 28.90;
            break;
        case 'Frango Bacon':
            valorProduto = 15.90;
            break;
        case 'Frango Salada':
            valorProduto = 16.90;
            break;
        case 'Frango Tudo':
            valorProduto = 17.90;
            break;
        case 'Frango Completo':
            valorProduto = 24.90;
            break;
        case 'Lombo Bacon':
            valorProduto = 15.90;
            break;
        case 'Lombo Salada':
            valorProduto = 16.90;
            break;
        case 'Lombo Tudo':
            valorProduto = 17.90;
            break;
        case 'Lombo Completo':
            valorProduto = 24.90;
            break;
        case 'Batata Pequena':
            valorProduto = 8.90;
            break;
        case 'Batata Grande':
            valorProduto = 12.90;
            break;
        case 'Refri Litro':
            valorProduto = 7.90;
            break;
        case 'Refri Lata':
            valorProduto = 3.90;
            break;
        case 'Cerveja Lata':
            valorProduto = 6.90;
            break;
        case 'Molho Alho':
            valorProduto = 1.90;
            break;
        case 'Molho Casa':
            valorProduto = 1.90;
            break;
        default:
            alert('Produto não encontrado');
            return;
    }
    
    // Adiciona o produto como existente
    produtoExistente.push('qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-'));

    // Calcula o valor total do produto e soma ao valor final
    valorTotal = valorProduto * quantidadeProduto;
    valorFinal += valorTotal;
    
    // Atualiza o valor total na tela
    document.getElementById('valorTotal').textContent = valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

// Função para remover produto do pedido
function removerProduto(nomeProduto) {
    // Obtém a quantidade do produto a partir do input
    let quantidadeProduto = parseInt(document.getElementById('qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-')).value);
    let valorProduto = 0;

    // Verifica se a quantidade é válida
    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        modal('erro');
        return;
    }

    // Define o valor do produto conforme o nome
    switch (nomeProduto) {
        case 'X-Bacon':
            valorProduto = 15.90;
            break;
        case 'X-Salada':
            valorProduto = 16.90;
            break;
        case 'X-Tudo':
            valorProduto = 17.90;
            break;
        case 'X-Completo':
            valorProduto = 24.90;
            break;
        case 'X-Bacon A':
            valorProduto = 22.90;
            break;
        case 'X-Salada A':
            valorProduto = 20.90;
            break;
        case 'X-Tudo A':
            valorProduto = 25.90;
            break;
        case 'X-Completo A':
            valorProduto = 28.90;
            break;
        case 'File Bacon':
            valorProduto = 17.90;
            break;
        case 'File Salada':
            valorProduto = 19.90;
            break;
        case 'File Tudo':
            valorProduto = 20.90;
            break;
        case 'File Completo':
            valorProduto = 28.90;
            break;
        case 'Frango Bacon':
            valorProduto = 15.90;
            break;
        case 'Frango Salada':
            valorProduto = 16.90;
            break;
        case 'Frango Tudo':
            valorProduto = 17.90;
            break;
        case 'Frango Completo':
            valorProduto = 24.90;
            break;
        case 'Lombo Bacon':
            valorProduto = 15.90;
            break;
        case 'Lombo Salada':
            valorProduto = 16.90;
            break;
        case 'Lombo Tudo':
            valorProduto = 17.90;
            break;
        case 'Lombo Completo':
            valorProduto = 24.90;
            break;
        case 'Batata Pequena':
            valorProduto = 8.90;
            break;
        case 'Batata Grande':
            valorProduto = 12.90;
            break;
        case 'Refri Litro':
            valorProduto = 7.90;
            break;
        case 'Refri Lata':
            valorProduto = 3.90;
            break;
        case 'Cerveja Lata':
            valorProduto = 6.90;
            break;
        case 'Molho Alho':
            valorProduto = 1.90;
            break;
        case 'Molho Casa':
            valorProduto = 1.90;
            break;
        default:
            alert('Produto não encontrado');
            return;
    }

    // Verifica se o produto existe no pedido
    if (produtoExistente.indexOf('qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-')) === -1) {
        modal('produto-inexistente');
        return;
    } else {
        // Calcula o valor total do produto e subtrai do valor final
        valorTotal = valorProduto * quantidadeProduto;
        valorFinal -= valorTotal;

        // Remove o produto do pedido
        produtoExistente = produtoExistente.filter(item => item !== 'qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-'));
    }

    // Verifica se o valor final é menor que zero
    // Se for, define como zero
    if (valorFinal < 0) {
        valorFinal = 0;
    }

    // Atualiza o valor total na tela
    document.getElementById('valorTotal').textContent = valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

// Função para finalizar o pedido
function finalizarPedido() {
    // Obtém o valor do pedido exibido na tela
    let valorPedido = document.getElementById('valorTotal').textContent;

    // Verifica se há produtos no pedido
    if (valorPedido == 'R$ 0.00') {
        modal('finalizar-erro');
        return;
    } else {
        // Exibe modal de sucesso e reseta valores
        modal('finalizar');
        document.getElementById('valorTotal').textContent = 'R$ 0.00';
        valorFinal = 0;
        // Limpa todos os campos de quantidade
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    }

    // Limpa o array
    produtoExistente = [];
}

// Função para resetar o pedido
function resetarPedido() {
    // Obtém o valor do pedido exibido na tela
    let valorPedido = document.getElementById('valorTotal').textContent;

    // Verifica se há produtos no pedido
    if (valorPedido == 'R$ 0.00') {
        modal('resetar-erro');
        return;
    }

    // Reseta valores e limpa campos de quantidade
    if (valorPedido != 'R$ 0.00') {
        document.getElementById('valorTotal').textContent = 'R$ 0.00';
        valorFinal = 0;
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    } 

    // Limpa o array
    produtoExistente = [];
}

// Função para exibir modais de alerta e mensagens
function modal(tipo) {
    var modalContent = '';

    // Define o conteúdo do modal conforme o tipo
    switch (tipo) {
        case 'erro':
            modalContent = `
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Erro!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>Por favor, insira uma quantidade válida.</p>
                </div>
            `
            break;
        case 'finalizar-erro':
            modalContent = `
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Erro!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>Não é possível finalizar o pedido, pois nenhum produto foi adicionado ao carrinho.</p>
                </div>
            `
            break;
        case 'finalizar':
            modalContent = `
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">Pedido Finalizado!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>Seu pedido foi finalizado com sucesso.</p>
                    <p>Obrigado por comprar conosco!</p>
                </div>
            `
            break;
        case 'resetar-erro':
            modalContent = `
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Erro!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>Não é possível resetar o pedido, pois nenhum produto foi adicionado ao carrinho.</p>
                </div>
            `
            break;
        case 'produto-inexistente':
            modalContent = `
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Erro!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>O produto não existe no carrinho.</p>
                </div>
            `
            break;
        default:
            alert('Tipo de modal inválido');
            return;
    }

    // Insere o conteúdo no modal e exibe
    document.getElementById('modalAlertaContent').innerHTML = modalContent;
    
    const modal = new bootstrap.Modal(document.getElementById('modalAlerta'));
    modal.show();
    return;
}