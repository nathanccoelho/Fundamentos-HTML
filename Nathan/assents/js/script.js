var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')

nome.style.width ='34%';
email.style.width= '34%';

var nomeOk = false;
var emailOk = false;
var assuntoOk= false;


function validarNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length <3){
        txtNome.innerHTML = "Nome invlálido!"
        txtNome.style.color = 'red'
        nomeOk = false;
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = 'green'
        nomeOk = true;  
    }
}

function validarEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf('@')== -1|| email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = 'red';
    } else {
        txtEmail.innerHTML = 'E-mail válido!'
        txtEmail.style.color = 'green';        
        emailOk = true;
    }
}

function validarAssunto(){
    let txtAssunto= document.querySelector('#txtAssunto')

    if( assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Digite no máximo 100 caracteres!'
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display ='none'
        assuntoOk = true;
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk== true){
        alert("Formulário enviado com sucesso! "+nome.value+"!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar")
    }
}