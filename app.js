//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaNome = [];
let qtdAmigos = listaNome.length;

//todas as ações devem ser add dentro desta função:
function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if(nome == '') {
        alert('Por favor digite um nome');
    } else {
        alert('Nome adicionado com sucesso');
    } if (nome != '') {
        listaNome.push(nome);
    } 

    limparCampo();
    addAmigo();
    
    console.log('esta clicando');
    console.log(listaNome);
    console.log(nome);
    console.log(qtdAmigos);
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';

}    
function addAmigo() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    listaNome.forEach (item => {
            let li = document.createElement('li');
            li.textContent = item;
            lista.appendChild(li);                
      });  
}

function sortearAmigo() {
    let sorteio = Math.floor(Math.random() * listaNome.length);
    let escolha = listaNome[sorteio];
    if (listaNome == "") {
        return sortearAmigo();
    } else {
        document.getElementById('resultado').innerHTML = escolha;
    }
    
    console.log(escolha);
    console.log(sorteio);
}