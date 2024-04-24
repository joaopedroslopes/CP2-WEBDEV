// Area de Login

var popup_login = document.querySelector('.popup-box-login');
var inputLogin = document.getElementsByClassName('input-login')[0];
var inputSenha = document.getElementsByClassName('input-senha')[0];

var btnlogin = document.querySelector('.btnLogin');
var pLogado = document.querySelector('.pLogado');

function btnLogin() {
    console.log('Clicou no botão de login!');
    popup_login.style.display = 'block';
}

function closePopupLogin() {
    console.log('Clicou no botão de fechar!');
    popup_login.style.display = 'none';
}

function Logar() {
    var login = inputLogin.value;
    var senha = inputSenha.value;

    if (login == '1234' && senha == '1234') {
        alert('Login efetuado com sucesso!');
        popup_login.style.display = 'none';

        pLogado.style.display = 'block';
        btnlogin.style.display = 'none';

    } else {
        alert('Login ou senha incorretos!');
    }
}

// Area de Contato

var popup_contato = document.querySelector('.popup-box-ctt');
var inputNome = document.getElementsByClassName('input-nome')[0];
var inputEmail = document.getElementsByClassName('input-email')[0];
var inputPhone = document.getElementsByClassName('input-phone')[0];
var inputMensagem = document.getElementsByClassName('input-msg')[0];

function btnContato() {
    console.log('Clicou no botão de contato!');
    popup_contato.style.display = 'block';
}

function closePopupCtt() {
    console.log('Clicou no botão de fechar!');
    popup_contato.style.display = 'none';
}

function EnviarMsg() {

    var nome = inputNome.value;
    var email = inputEmail.value;
    var phone = inputPhone.value;
    var mensagem = inputMensagem.value;

    if (nome == '' || email == '' || phone == '' || mensagem == '') {
        alert('Preencha todos os campos!');
    } else {
        alert('Mensagem enviada com sucesso!');
        popup_contato.style.display = 'none';

        console.log(`Nome: ${nome}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${mensagem}`);

    }

}