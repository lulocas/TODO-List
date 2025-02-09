var adicionar = document.getElementById('add');
var tarefasDiv = document.getElementById('tarefas');
alert(adicionar);
var botoes = document.getElementById('botoes');
alert(botoes);
var main = document.getElementsByTagName('main');

class Tarefa{
    nome;
    descricao;
    categoria;
    prioridade;
    data;
    status;

    constructor(nome, descricao, categoria, prioridade, data, status){
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.prioridade = prioridade;
        this.data = data;
        this.status = status;
    }
}

var tarefas = [];

adicionar.onclick= function(){

    // Criação da caixa do fundo
    var caixa = document.createElement('div');
    caixa.classList.add("container");
    botoes.parentElement.insertBefore(caixa, botoes);


    // Criação caixa azul
    var caixa2 = document.createElement('div');
    caixa2.classList.add("caixa");
    caixa.appendChild(caixa2);

    // Ciação div do botao sair
    var botaoX = document.createElement('div');
    botaoX.id = "botaoX";
    caixa2.appendChild(botaoX);
    // Criação botao sair
    var bSair = document.createElement('button');
    bSair.id = "sair";
    bSair.textContent = "X";
    botaoX.appendChild(bSair);


    // Criação div labels para ficar os inputs e labels
    var labels = document.createElement('div');
    labels.classList.add("labels");
    caixa2.appendChild(labels);
    // Ciação labels e inputs
    var labelNome = document.createElement('label');
    labelNome.htmlFor = "nome";
    labelNome.textContent = "Nome: ";
    labels.appendChild(labelNome);
    var inputNome = document.createElement('input');
    inputNome.type = "text";
    inputNome.name = "nome";
    inputNome.placeholder = "nome...";
    labels.appendChild(inputNome);

    var labelDescricao = document.createElement('label');
    labelDescricao.htmlFor = "descricao";
    labelDescricao.textContent = "Descrição: ";
    labels.appendChild(labelDescricao);
    var inputDescricao= document.createElement('input');
    inputDescricao.type = "text";
    inputDescricao.name = "descricao";
    inputDescricao.placeholder = "descricao...";
    inputDescricao.id = "inputd"
    labels.appendChild(inputDescricao);

    var labelCategoria = document.createElement('label');
    labelCategoria.htmlFor = "categoria";
    labelCategoria.textContent = "Categoria: ";
    labels.appendChild(labelCategoria);
    var inputCategoria = document.createElement('input');
    inputCategoria.type = "text";
    inputCategoria.name = "categoria";
    inputCategoria.placeholder = "categoria...";
    labels.appendChild(inputCategoria);

    var labelData = document.createElement('label');
    labelData.htmlFor = "data";
    labelData.textContent = "Data de término: ";
    labels.appendChild(labelData);
    var inputData = document.createElement('input');
    inputData.type = "date";
    inputData.name = "data";
    labels.appendChild(inputData);


    // Criação da div de selecionar
    var selecionar = document.createElement('div');
    selecionar.classList.add("selecionar");
    caixa2.appendChild(selecionar);
    var tituloPrioridade = document.createElement('p');
    tituloPrioridade.textContent = "Nível de prioridade: "
    selecionar.appendChild(tituloPrioridade);
    // Criação da div de prioridade
    var nivelPrioridade = document.createElement('div');
    nivelPrioridade.classList.add("nivelprioridade");
    selecionar.appendChild(nivelPrioridade);
    // Criação dos elementos de input e label
    var inputR1 = document.createElement('input');
    inputR1.type = "radio";
    inputR1.id = "nivel1";
    inputR1.value = "1";
    inputR1.name = "prioridade";
    nivelPrioridade.appendChild(inputR1);
    var labelR1 = document.createElement('label');
    labelR1.htmlFor = "nivel1";
    labelR1.textContent = "1";
    nivelPrioridade.appendChild(labelR1);

    var inputR2 = document.createElement('input');
    inputR2.type = "radio";
    inputR2.id = "nivel2";
    inputR2.value = "2";
    inputR2.name = "prioridade";
    nivelPrioridade.appendChild(inputR2);
    var labelR2 = document.createElement('label');
    labelR2.htmlFor = "nivel2";
    labelR2.textContent = "2";
    nivelPrioridade.appendChild(labelR2);

    var inputR3 = document.createElement('input');
    inputR3.type = "radio";
    inputR3.id = "nivel1";
    inputR3.value = "1";
    inputR3.name = "prioridade";
    nivelPrioridade.appendChild(inputR3);
    var labelR3 = document.createElement('label');
    labelR3.htmlFor = "nivel3";
    labelR3.textContent = "3";
    nivelPrioridade.appendChild(labelR3);

    var inputR4 = document.createElement('input');
    inputR4.type = "radio";
    inputR4.id = "nivel1";
    inputR4.value = "1";
    inputR4.name = "prioridade";
    nivelPrioridade.appendChild(inputR4);
    var labelR4 = document.createElement('label');
    labelR4.htmlFor = "nivel4";
    labelR4.textContent = "4";
    nivelPrioridade.appendChild(labelR4);

    var inputR5 = document.createElement('input');
    inputR5.type = "radio";
    inputR5.id = "nivel1";
    inputR5.value = "1";
    inputR5.name = "prioridade";
    nivelPrioridade.appendChild(inputR5);
    var labelR5 = document.createElement('label');
    labelR5.htmlFor = "nivel5";
    labelR5.textContent = "5";
    nivelPrioridade.appendChild(labelR5);


    // Ciração da div dos botoes
    var statuselect = document.createElement('div');
    statuselect.classList.add("statuselect");
    caixa2.appendChild(statuselect);
    // Ciração dos botoes
    var botaoToDo = document.createElement('button');
    botaoToDo.classList.add("botaoselect");
    botaoToDo.id = "selecttodo";
    botaoToDo.textContent = "To do";
    statuselect.appendChild(botaoToDo);

    var botaoDoing = document.createElement('button');
    botaoDoing.classList.add("botaoselect");
    botaoDoing.id = "selectdoing";
    botaoDoing.textContent = "Doing";
    statuselect.appendChild(botaoDoing);

    var botaoDone = document.createElement('button');
    botaoDone.classList.add("botaoselect");
    botaoDone.id = "selectdone";
    botaoDone.textContent = "Done";
    statuselect.appendChild(botaoDone);


    // Ciação botao salvar
    var salvar = document.createElement('button');
    salvar.id="salvar";
    caixa2.appendChild(salvar); 
    salvar.textContent = 'Salvar';

    salvar.onclick = function(){
        var nome = inputNome.value;
        var descricao = inputDescricao.value;
        var categoria = inputCategoria.value;
        var data = inputData.value;
        var prioridadeLista = document.getElementsByName("prioridade")
        var prioridade;
        for(var i = 0; i < prioridadeLista.length; i++){
            if ( prioridadeLista[i].checked ) {
                if(prioridadeLista[i].value == "1"){
                    prioridade = prioridadeLista[i].value;
                }else if (prioridadeLista[i].value == "2") {
                    prioridade = prioridadeLista[i].value;
                }else if (prioridadeLista[i].value == "3") {
                    prioridade = prioridadeLista[i].value;
                }else if (prioridadeLista[i].value == "4") {
                    prioridade = prioridadeLista[i].value;
                }else if (prioridadeLista[i].value == "5") {
                    prioridade = prioridadeLista[i].value;
                }
            }
        }
        var status;
        if(caixa2.style.backgroundColor == "tomato"){
            status = "to do";
        }else if(caixa2.style.backgroundColor == "orange"){
            status = "doing";
        }else if(caixa2.style.backgroundColor == "mediumseagreen"){
            status = "done";
        }

        const tarefa = new Tarefa(nome, descricao, categoria, data, prioridade, status);
        tarefas.push(tarefa);

        var nota = document.createElement('div');
        nota.classList.add("nota");
        tarefasDiv.appendChild(nota);

        var texto = document.createElement('div');
        texto.classList.add("texto");
        nota.appendChild(texto);
        
        var pNome = document.createElement('p');
        pNome.classList.add("nome");
        pNome.textContent = tarefa.nome;
        texto.appendChild(pNome);

        var pDescricao = document.createElement('p');
        pDescricao.classList.add("descricao");
        pDescricao.textContent = tarefa.descricao;
        texto.appendChild(pDescricao);

        if(caixa2.style.backgroundColor == "tomato"){
            nota.style.backgroundColor = "tomato";
        }else if(caixa2.style.backgroundColor == "orange"){
            nota.style.backgroundColor = "orange";
        }else if(caixa2.style.backgroundColor == "mediumseagreen"){
            nota.style.backgroundColor = "mediumseagreen";
        }

        caixa2 = document.querySelector('.caixa');
        if (caixa2) {
            caixa2.remove();
        }
        caixa = document.querySelector('.container');
        if (caixa) {
            caixa.remove();
        }

    }

    botaoToDo.onclick = function(){
        caixa2.style.backgroundColor = "tomato";
    }
    botaoDoing.onclick = function(){
        caixa2.style.backgroundColor = "orange";
    }
    botaoDone.onclick = function(){
        caixa2.style.backgroundColor = "mediumseagreen";
    }

}

