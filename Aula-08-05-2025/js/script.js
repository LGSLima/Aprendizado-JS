var quantidadeProduto = 0;
var valorFinal = 0;
var valorDesconto = 0;
var valorAPagar = 0;
var produtosSelecionados = {}; // Armazena as quantidades de cada produto

// Função para adicionar produto ao pedido
function adicionarProduto(nomeProduto) {
    // Obtém a quantidade do produto a partir do input
    quantidadeProduto = parseInt(document.getElementById('qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-')).value);   
    let valorProduto = 0;

    // Dá valor 0 caso o valor seja NaN
    if(isNaN(quantidadeProduto)) {
        quantidadeProduto = 0;
    }

    // Verifica se a quantidade é válida
    if (quantidadeProduto < 0) {
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
            break;
    }

    // Atualiza a quantidade do produto selecionado
    produtosSelecionados[nomeProduto] = { quantidade: quantidadeProduto, valor: valorProduto};

    // Recalcula o valorFinal somando todos os produtos
    valorFinal = 0;
    for (let produto in produtosSelecionados) {
        let item = produtosSelecionados[produto];
        valorFinal += (item.valor * item.quantidade);
    }

    // Atualiza o valor total na tela
    document.getElementById('valorTotal').textContent = valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

function adicional(nomeProduto) {
    quantidadeProduto = parseInt(document.getElementById('qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-')).value);
    const plus = 5;
    
    valorFinal += quantidadeProduto * plus;

    document.getElementById('valorTotal').textContent = valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

function descontoValPagar() {
    let valorTemp = valorFinal;
    const frete = 7;

    if(document.getElementById('pgCredito').checked) {
        valorDesconto = valorTemp * 0.05;
        valorAPagar = valorFinal - valorDesconto;
    } else if (document.getElementById('pgDebito').checked) {
        valorDesconto = valorTemp * 0.1;
        valorAPagar = valorFinal - valorDesconto;
    } else if (document.getElementById('pgDinPix').checked) {
        valorDesconto = valorTemp * 0.15;
        valorAPagar = valorFinal - valorDesconto;
    } else {
        modal('erro');
        return;
    }

    if (document.getElementById('retirada').checked) {
        valorAPagar = valorAPagar;
    }

    if (document.getElementById('entrega').checked) {
        valorAPagar = valorAPagar + frete;
    }

    document.getElementById('valorDesconto').textContent = `${valorDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
    document.getElementById('valorAPagar').textContent = `${valorAPagar.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;

}

// Função para finalizar o pedido
function finalizarPedido() {
    // Obtém o valor do pedido exibido na tela
    let valorPedido = document.getElementById('valorTotal').textContent;

    // Verifica se há produtos no pedido
    if (
        valorPedido == 'R$ 0,00' ||
        (document.getElementById('valorAPagar').textContent === 'R$ 0,00' &&
         document.getElementById('valorDesconto').textContent === 'R$ 0,00') ||
        (document.getElementById('valorAPagar').textContent == "R$ 7,00" &&
         document.getElementById('valorDesconto').textContent === 'R$ 0,00')
    ) {
        modal('finalizar-erro');
    } else {
        // Exibe modal de sucesso e reseta valores
        modal('finalizar');
        resetarPedido();
    }
}

// Função para resetar o pedido
function resetarPedido() {
    document.getElementById('valorTotal').textContent = 'R$ 0,00';
    valorFinal = 0;
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    document.getElementById('valorDesconto').textContent = 'R$ 0,00';
    document.getElementById('valorAPagar').textContent = 'R$ 0,00';
}

// Função para exibir modais de alerta e mensagens
function modal(tipo) {
    var modalContent = '';
    var valor = valorAPagar;

    // Define o conteúdo do modal conforme o tipo
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
            `
            break;
        case 'finalizar-erro':
            modalContent = `
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title">Erro!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body" style="text-align: justify">
                    <p>Não é possível finalizar o pedido, pois nenhum produto foi adicionado ao carrinho ou nenhuma forma de pagamento foi selecionada.</p>
                </div>
            `
            break;
        case 'finalizar':
            modalContent = `
                <div class="modal-header bg-success text-white">
                    <h5 class="modal-title">Pagamento finalizado!</h5>
                    <button type="button" class="btn-close bg-light" data-bs-dismiss="modal" aria-label="Fechar modal"></button>
                </div>
                <div class="modal-body">
                    <p>Valor do pedido: ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.
                    <p>Obrigado por comprar com a gente. Volte sempre!</p>
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
            break;
    }

    // Insere o conteúdo no modal e exibe
    document.getElementById('modalAlertaContent').innerHTML = modalContent;
    
    const modal = new bootstrap.Modal(document.getElementById('modalAlerta'));
    modal.show();
}