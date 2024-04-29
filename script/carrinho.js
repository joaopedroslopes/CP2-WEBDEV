// var total = localStorage.getItem('total') ? Number(localStorage.getItem('total')) : 0;
var total = 0;
var carrinho = document.getElementById("add_carrinho");
const preco_vinho1 = 40;
const preco_vinho2 = 90; 
const preco_vinho3 = 150;


function AddCarrinho(){
    var qtd = document.getElementsByClassName('qtdvinho')[0].value;
    var nome_vinho = document.getElementsByClassName('nome-vinho')[0].textContent;
    console.log(`${qtd} unidades de ${nome_vinho}`);

    alert(`${qtd} unidades do ${nome_vinho} foram adicionados ao carrinho`);

    if (nome_vinho == 'Vinho 1'){
        var preco = preco_vinho1;
    }
    else if (nome_vinho == 'Vinho 2'){
        var preco = preco_vinho2;
    }
    else if (nome_vinho == 'Vinho 3'){
        var preco = preco_vinho3;
    }

    total += qtd * preco;

    localStorage.setItem('total', total);
    console.log(`Cada unidade custa R$${preco} e o total é R$${total}`)

    // carrinho.innerText = `Carrinho: R$${total.toFixed(2)}`;

}