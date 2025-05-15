var valorTemp = 0;
var quantidadeProduto = 0;
var valorAPagar = 0;
var produtosSelecionados = {};

// Função para adicionar produto ao pedido
function adicionarProduto(nomeProduto) {
    // Obtém os elementos necessários
    const inputId = 'qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-');
    const inputValor = document.getElementById(inputId);
    const plusCheckbox = inputValor.closest('.card-body').querySelector('.plus');

    // Obtém a quantidade do produto
    quantidadeProduto = parseInt(inputValor.value);

    // Verifica se a quantidade é válida
    if(quantidadeProduto < 0) {
        modal('erro');
        inputValor.value = '';
        return;
    }

    if(!inputValor) {
        alert("Input não escontrado.")
    }

    var valorProduto = 0;
    const plus = 5;

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
            return;
    }

    let valorPlus = 0

    // Calcula o valor do plus
    if(plusCheckbox && plusCheckbox.checked) {
        valorPlus = quantidadeProduto * plus;
    }
    
    // Atualiza a quantidade do produto selecionado
    if(quantidadeProduto > 0) {
        produtosSelecionados[nomeProduto] = {quantidade: quantidadeProduto, valor: valorProduto, plus: valorPlus};
    } else {
        delete produtosSelecionados[nomeProduto];
    }

    var valorFinal = 0;

    // Recalcula o valorFinal somando todos os produtos
    for(let produto in produtosSelecionados) {
        let item = produtosSelecionados[produto]
        valorFinal += (item.quantidade * item.valor) + item.plus;
    }

    valorTemp = valorFinal;
    descontoValPagar();
    listaProdutos();

    // Atualiza o valor total na tela
    document.getElementById('valorTotal').textContent = valorFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}

// Função para atualizar a lista de produtos no resumo
function listaProdutos() {
    const prod = document.getElementById('produtosLista');
    let lista = '';
    
    for (let produto in produtosSelecionados) {
        const item = produtosSelecionados[produto];
        lista += `<div class="d-flex justify-content-between">
            <span>${produto} x${item.quantidade} ${item.plus > 0 ? '(Plus)' : ''}</span>
            <span>${((item.valor * item.quantidade) + item.plus).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span>
        </div>`;
    }
    
    prod.innerHTML = lista || 'Nenhum produto selecionado';
}

// Função para o cálculo do desconto e do valor a apagar
function descontoValPagar() {
    var valorDesconto = 0;
    const frete = 7;

    if(document.getElementById('pgCredito').checked) {
        valorDesconto = valorTemp * 0.05;
        valorAPagar = valorTemp - valorDesconto;
    } else if (document.getElementById('pgDebito').checked) {
        valorDesconto = valorTemp * 0.1;
        valorAPagar = valorTemp - valorDesconto;
    } else if (document.getElementById('pgDinPix').checked) {
        valorDesconto = valorTemp * 0.15;
        valorAPagar = valorTemp - valorDesconto;
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
    // Reseta as variáveis globais
    quantidadeProduto = 0;
    valorDesconto = 0;
    valorAPagar = 0;
    produtosSelecionados = {};    

    // Reseta o texto mostrado
    document.getElementById('valorTotal').textContent = 'R$ 0,00';
    document.getElementById('valorDesconto').textContent = 'R$ 0,00';
    document.getElementById('valorAPagar').textContent = 'R$ 0,00';
    document.getElementById('produtosLista').innerHTML = 'Nenhum produto selecionado';

    // Reseta os inputs
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    document.querySelectorAll('.plus').forEach(checkbox => {checkbox.checked = false;});

    // Reseta os métodos de pagamento
    document.getElementById('pgCredito').checked = true;
    document.getElementById('retirada').checked = true;
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