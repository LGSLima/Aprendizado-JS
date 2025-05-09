const precos = {
    'X-Bacon': 15.90,
    'X-Salada': 16.90,
    'X-Tudo': 17.90,
    'X-Completo': 24.90,
    'X-BaconA': 22.90,
    'X-SaladaA': 20.90,
    'X-TudoA': 25.90,
    'X-CompletoA': 28.90,
    'Filé Bacon': 17.90,
    'Filé Salada': 19.90,
    'Filé Tudo': 20.90,
    'Filé Completo': 28.90,
    'Frango Bacon': 15.90,
    'Frango Salada': 16.90,
    'Frango Tudo': 17.90,
    'Frango Completo': 24.90,
    'Lombo Bacon': 15.90,
    'Lombo Salada': 16.90,
    'Lombo Tudo': 17.90,
    'Lombo Completo': 24.90,
    'Batata Frita Pequena': 8.90,
    'Batata Frita Grande': 12.90,
    'Refrigerante Litro': 7.90,
    'Refrigerante Lata': 3.90,
    'Cerveja Lata': 6.90,
    'Molho de Alho': 1.90,
    'Molho da Casa': 1.90
};

let pedido = {};

function adicionarProduto(nomeProduto, botao) {
    const cardBody = botao.closest('.card-body');
    const input = cardBody.querySelector('.quantidade');
    const quantidade = parseInt(input.value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Quantidade inválida. Por favor, insira um número maior que zero.');
        input.value = '';
        return;
    }

    carrinho[nomeProduto] = (carrinho[nomeProduto] || 0) + quantidade;
    
    let total = Object.entries(carrinho).reduce((acc, [produto, qtd]) => {
        return acc + (precos[produto] * qtd);
    }, 0);

    document.getElementById('valorTotal').innerText = `R$ ${total.toFixed(2)}`;
    input.value = '';

    if(total > 0) {
        alert(`Produto ${nomeProduto} adicionado ao carrinho!`);
    }
}