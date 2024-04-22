function validarIdade(){

    var idade = document.getElementById("input-idade").value;

    if(idade >= 18){
        alert("Você é maior de idade, pode acessar o site!");
        window.location.href = "./pages/home-page.html";
    }else{
        alert("Você é menor de idade, não pode acessar o site!");
        window.location.href = "https://www.cnnbrasil.com.br/tudo-sobre/criancas/";
    }

}