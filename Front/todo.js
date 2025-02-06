var adicionar = document.getElementById('add');
var tarefas = document.getElementById('tarefas');
alert(adicionar);

function adicionartarefa(){
    var caixa = document.createElement('div');
    caixa.classList.add("container");
    document.getElementById("botoes").insertBefore(caixa);
    var caixa2 = document.createElement('div');
    caixa2.classList.add("caixa");
    caixa.appendChild(caixa2);
    var labels = document.createElement('div');
    labels.classList.add("labels");
    caixa2.appendChild(labels);
    var selecionar = document.createElement('div');
    selecionar.classList.add("selecionar");
    caixa2.appendChild(selecionar);
    var statuselect = document.createElement('div');
    statuselect.classList.add("statuselect");
    caixa2.appendChild(statuselect);
    var salvar = document.createElement('button');
    salvar.id="salvar";
    caixa2.appendChild(salvar);
}