const elementoInput = document.querySelector('.novaTarefa');
const elementoSubmit = document.querySelector('.adicionarTarefa');
const listaPagina = document.querySelector('.lista');
const listaTarefa = [];




elementoSubmit.setAttribute("onclick", "inserirItem()");


function inserirItem(){

    event.preventDefault();
    const itemTarefa = document.querySelector('.novaTarefa').value;
    listaTarefa.push(itemTarefa);

    elementoInput.value = '';

    listarTarefa();

}


function listarTarefa(){

    listaPagina.innerHTML = '';

    for(i = 0; i < listaTarefa.length; i++){
        const itemListaPagina = document.createElement("li");
        const textoItemLista = document.createTextNode(listaTarefa[i]);

        const pos = listaTarefa.indexOf(listaTarefa[i]);

        itemListaPagina.setAttribute("onclick", `excluirItem(${pos})`);

        const itemLink = document.createElement('a');   
        itemLink.setAttribute("href", "#");

        const conteudo = document.createTextNode('X');
        itemLink.appendChild(conteudo);


        itemListaPagina.appendChild(textoItemLista);
        listaPagina.appendChild(itemListaPagina);
        itemListaPagina.appendChild(itemLink);
        
    };
}


function excluirItem(pos){
    listaTarefa.splice(pos, 1);
    listarTarefa();

}


