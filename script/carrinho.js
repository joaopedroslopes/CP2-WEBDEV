// var total = localStorage.getItem('total') ? Number(localStorage.getItem('total')) : 0;
var total = 0;
var carrinho = document.getElementsByClassName('carrinho')[0];
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

    carrinho.innerText = `Carrinho: R$${total.toFixed(2)}`;

}
function AddCupom(){

    var cupom = document.getElementsByClassName('cupom_desconto')[0].value;
    var preco_vinho = document.getElementsByClassName('preco_vinho')[0];
    var nome_vinho = document.getElementsByClassName('nome_vinho')[0].textContent;

    if (cupom == 'FIAP2024') {

        if (nome_vinho == 'Vinho 1'){
            preco_vinho1 *= 0.9;
            preco_vinho.textContent = R$$(preco_vinho1.toFixed(2));
        } 
        else if (nome_vinho == 'Vinho 2'){
            preco_vinho2 *= 0.9;
            preco_vinho.textContent = R$$(preco_vinho2.toFixed(2));
        } 
        else if (nome_vinho == 'Vinho 3'){
            preco_vinho3 *= 0.9;
            preco_vinho.textContent = R$$(preco_vinho3.toFixed(2));
        }
        
        carrinho.innerText = carrinho = R$$(total.toFixed(2));
        alert('Cupom aplicado! 10% de desconto!');
    } 
    else {
        alert('Cupom inválido!');
    }

}