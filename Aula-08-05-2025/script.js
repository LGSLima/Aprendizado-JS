const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}

var valorTotal = 0;
var valorFinal = 0;

function adicionarProduto(nomeProduto) {
    let quantidadeProduto = parseInt(document.getElementById('qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-')).value);
    let valorProduto = 0;

    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
        return;
    }

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

    valorTotal = valorProduto * quantidadeProduto;
    valorFinal += valorTotal;
    document.getElementById('valorTotal').textContent = 'R$ ' + valorFinal.toFixed(2);
}

function finalizarPedido() {
    let valorPedido = document.getElementById('valorTotal').textContent;

    if (valorPedido == '-' || valorPedido == 'R$ 0.00') {
        alert('Adicione produtos ao pedido antes de finalizar.');
        return;
    } else {
        alert('Pedido finalizado com sucesso! Valor total: ' + valorPedido);
        document.getElementById('valorTotal').textContent = '-';
        valorFinal = 0;
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    }
}

function resetarPedido() {
    let valorPedido = document.getElementById('valorTotal').textContent;

    if (valorPedido != '-' || valorPedido != 'R$ 0.00') {
        document.getElementById('valorTotal').textContent = '-';
        valorFinal = 0;
        alert('Pedido resetado com sucesso!');
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
    }
}

function removerProduto(nomeProduto) {
    let quantidadeProduto = parseInt(document.getElementById('qtd-' + nomeProduto.toLowerCase().replace(/ /g, '-')).value);
    let valorProduto = 0;

    if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
        alert('Quantidade inválida');
        return;
    }

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

    valorTotal = valorProduto * quantidadeProduto;
    valorFinal -= valorTotal;
    document.getElementById('valorTotal').textContent = 'R$ ' + valorFinal.toFixed(2);
}