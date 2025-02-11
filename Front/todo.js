var adicionar = document.getElementById('add');
var tarefasDiv = document.getElementById('tarefas');
var botoes = document.getElementById('botoes');
var main = document.getElementsByTagName('main');
var notas = document.querySelectorAll('.nota');
var botaoExcluir = document.getElementsByClassName('botaoEx');
var listarToDo = document.getElementById('listarToDo');
var listarDoing = document.getElementById('listarDoing');
var listarDone = document.getElementById('listarDone');
var all = document.getElementById('all');
var aux = 0;

class Tarefa{
    nome;
    descricao;
    categoria;
    prioridade;
    data;
    status;

    constructor(nome, descricao, categoria, data, status){
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.data = data;
        this.status = status;
    }
}

var tarefas = [];
var notaslist = [];

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

        aux++;

        var nome = inputNome.value;
        var descricao = inputDescricao.value;
        var categoria = inputCategoria.value;
        var data = new Date(inputData.value);
        var status;
        if(caixa2.style.backgroundColor == "tomato"){
            status = "to do";
        }else if(caixa2.style.backgroundColor == "orange"){
            status = "doing";
        }else if(caixa2.style.backgroundColor == "mediumseagreen"){
            status = "done";
        }

        const tarefa = new Tarefa(nome, descricao, categoria, data,  status);
        tarefas.push(tarefa);

        console.log(tarefas);

        var nota = document.createElement('div');
        nota.classList.add("nota");
        nota.id = "nota" + aux;
        tarefasDiv.appendChild(nota);

        var div2 = document.createElement('div');
        div2.classList.add('test');
        nota.appendChild(div2);

        var divExcluir = document.createElement('div');
        divExcluir.classList.add('excluir');
        div2.appendChild(divExcluir);
        var botaoEx = document.createElement('button');
        botaoEx.classList.add("botaoEx");
        botaoEx.textContent = "Excluir";
        divExcluir.appendChild(botaoEx); 
        var botaoEd = document.createElement('button');
        botaoEd.classList.add('botaoEx');
        botaoEd.textContent = "Editar";
        divExcluir.appendChild(botaoEd);

        var texto = document.createElement('div');
        texto.classList.add("texto");
        div2.appendChild(texto);
        
        var pNome = document.createElement('p');
        pNome.classList.add("nome");
        pNome.textContent = tarefa.nome;
        texto.appendChild(pNome);

        var pDescricao = document.createElement('p');
        pDescricao.classList.add("descricao");
        pDescricao.textContent = tarefa.descricao;
        texto.appendChild(pDescricao);

        var pCategoria = document.createElement('p');
        pCategoria.classList.add("descricao");
        pCategoria.textContent = tarefa.categoria;
        texto.appendChild(pCategoria);

        var pData = document.createElement('p');
        pData.classList.add("descricao");
        pData.textContent = data.toLocaleDateString('pt-BR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
        texto.appendChild(pData);


        // Criação da div de selecionar
        var selecionar = document.createElement('div');
        selecionar.classList.add("selecionar");
        texto.appendChild(selecionar);
        var tituloPrioridade = document.createElement('p');
        tituloPrioridade.textContent = "Nível de prioridade: "
        tituloPrioridade.classList.add("prioridade");
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
        labelR1.classList.add("labelnota");
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
        labelR2.classList.add("labelnota");
        nivelPrioridade.appendChild(labelR2);

        var inputR3 = document.createElement('input');
        inputR3.type = "radio";
        inputR3.id = "nivel3";
        inputR3.value = "3";
        inputR3.name = "prioridade";
        nivelPrioridade.appendChild(inputR3);
        var labelR3 = document.createElement('label');
        labelR3.htmlFor = "nivel3";
        labelR3.textContent = "3";
        labelR3.classList.add("labelnota");
        nivelPrioridade.appendChild(labelR3);

        var inputR4 = document.createElement('input');
        inputR4.type = "radio";
        inputR4.id = "nivel4";
        inputR4.value = "4";
        inputR4.name = "prioridade";
        nivelPrioridade.appendChild(inputR4);
        var labelR4 = document.createElement('label');
        labelR4.htmlFor = "nivel4";
        labelR4.textContent = "4";
        labelR4.classList.add("labelnota");
        nivelPrioridade.appendChild(labelR4);

        var inputR5 = document.createElement('input');
        inputR5.type = "radio";
        inputR5.id = "nivel5";
        inputR5.value = "5";
        inputR5.name = "prioridade";
        nivelPrioridade.appendChild(inputR5);
        var labelR5 = document.createElement('label');
        labelR5.htmlFor = "nivel5";
        labelR5.textContent = "5";
        labelR5.classList.add("labelnota");
        nivelPrioridade.appendChild(labelR5);

        // Ciração da div dos botoes
        var statuselect = document.createElement('div');
        statuselect.classList.add("statuselect");
        statuselect.id = 'statusSedit';
        texto.appendChild(statuselect);
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

        botaoDone.onclick = function(){
            nota.style.backgroundColor = 'mediumseagreen';
            tarefa.status = 'done';
            atualizarStatus(tarefa.status);
        }

        botaoDoing.onclick = function(){
            nota.style.backgroundColor = 'orange';
            tarefa.status = 'doing';
            atualizarStatus(tarefa.status);
        }

        botaoToDo.onclick = function(){
            nota.style.backgroundColor = 'tomato';
            tarefa.status = 'to do';
            atualizarStatus(tarefa.status);
        }

        function atualizarStatus(status){
            if(tarefa.status == 'to do'){
                nota.onmouseover = function(){
                    nota.style.backgroundColor = 'rgb(228, 87, 63)';
                }
                nota.onmouseout = function(){
                    nota.style.backgroundColor = 'tomato';
                }
            }else if(tarefa.status == 'doing'){
                nota.onmouseover = function(){
                    nota.style.backgroundColor = 'rgb(219, 148, 15)';
                }
                nota.onmouseout = function(){
                    nota.style.backgroundColor = 'orange';
                }
            }else if(tarefa.status == 'done'){
                nota.onmouseover = function(){
                    nota.style.backgroundColor = 'rgb(54, 151, 98)';
                }
                nota.onmouseout = function(){
                    nota.style.backgroundColor = 'mediumseagreen';
                }
            }
                                                                                                                                                                                                                                                                                                                                                                                                            
            
        }
        inputR1.addEventListener('change', function() { atualizarPrioridade(); });
        inputR2.addEventListener('change', function() { atualizarPrioridade(); });
        inputR3.addEventListener('change', function() { atualizarPrioridade(); });
        inputR4.addEventListener('change', function() { atualizarPrioridade(); });
        inputR5.addEventListener('change', function() { atualizarPrioridade(); });

        function atualizarPrioridade(prioridade){
            if(inputR1.checked){
                tarefa.prioridade = 1;
            }else if(inputR2.checked){
                tarefa.prioridade = 2;                                                                                                                                                                                                                                                              
            }else if(inputR3.checked){
                tarefa.prioridade = 3;
            }else if(inputR4.checked){
                tarefa.prioridade = 4;
            }else if(inputR5.checked){                                                                                                                                                                                                                                                                              
                tarefa.prioridade = 5;
            }
        }

        botaoEx.onclick = function(){
            nota.remove();
            var index = tarefas.indexOf(tarefa);
            if (index !== -1) {
                tarefas.splice(index, 1);
            }
        }
        console.log(tarefas);

        botaoEd.onclick = function(){
            var divSalvarEdit = document.createElement('div');
            divSalvarEdit.classList.add('divSalvarEdit');
            nota.appendChild(divSalvarEdit);
            var botaoSalvar = document.createElement('button');
            botaoSalvar.classList.add('botaoSalvarEdit');
            botaoSalvar.textContent = 'Salvar';
            divSalvarEdit.appendChild(botaoSalvar);
            nota.style.overflow = 'auto';

            var divNomeBotao = document.createElement('div');
            divNomeBotao.classList.add("pEbotao");
            pNome.parentElement.insertBefore(divNomeBotao, pNome);
            divNomeBotao.appendChild(pNome);
            var botaoLapisNome = document.createElement('button');
            botaoLapisNome.classList.add('botaoLapis');
            botaoLapisNome.textContent = "*";
            divNomeBotao.appendChild(botaoLapisNome);

            var divDescricaoBotao = document.createElement('div');
            divDescricaoBotao.classList.add("pEbotao");
            pDescricao.parentElement.insertBefore(divDescricaoBotao, pDescricao);
            divDescricaoBotao.appendChild(pDescricao);
            var botaoLapisDescricao = document.createElement('button');
            botaoLapisDescricao.classList.add('botaoLapis');
            botaoLapisDescricao.textContent = "*";
            botaoLapisDescricao.id ="botaoLD"
            divDescricaoBotao.appendChild(botaoLapisDescricao);

            var divCategoriaBotao = document.createElement('div');
            divCategoriaBotao.classList.add("pEbotao");
            pCategoria.parentElement.insertBefore(divCategoriaBotao, pCategoria);
            divCategoriaBotao.appendChild(pCategoria);
            var botaoLapisCategoria = document.createElement('button');
            botaoLapisCategoria.classList.add('botaoLapis');
            botaoLapisCategoria.textContent = "*";
            botaoLapisCategoria.id ="botaoLC"
            divCategoriaBotao.appendChild(botaoLapisCategoria);

            var divDataBotao = document.createElement('div');
            divDataBotao.classList.add("pEbotao");
            pData.parentElement.insertBefore(divDataBotao, pData);
            divDataBotao.appendChild(pData);
            var botaoLapisData = document.createElement('button');
            botaoLapisData.classList.add('botaoLapis');
            botaoLapisData.textContent = "*";
            botaoLapisData.id ="botaoLDt"
            divDataBotao.appendChild(botaoLapisData);

            botaoLapisNome.onclick = function(){
                var inputNomeEdit = document.createElement('input');
                inputNomeEdit.classList.add('inputEdit');
                inputNomeEdit.placeholder = "Novo nome...";
                inputNomeEdit.type = "text";
                divDescricaoBotao.parentElement.insertBefore(inputNomeEdit, divDescricaoBotao);
                
                inputNomeEdit.addEventListener('blur', function() {
                    tarefa.nome = inputNomeEdit.value;
                });

            }

            botaoLapisDescricao.onclick = function(){
                var inputDescricaoEdit = document.createElement('textarea');
                inputDescricaoEdit.classList.add('inputEdit');
                inputDescricaoEdit.placeholder = "Nova descrição...";
                inputDescricaoEdit.id = "inputEditDes";
                divCategoriaBotao.parentElement.insertBefore(inputDescricaoEdit, divCategoriaBotao);
                
                inputDescricaoEdit.addEventListener('blur', function() {
                    tarefa.descricao = inputDescricaoEdit.value;
                });

            }

            botaoLapisCategoria.onclick = function(){
                var inputCategoriaEdit = document.createElement('input');
                inputCategoriaEdit.classList.add('inputEdit');
                inputCategoriaEdit.placeholder = "Nova categoria...";
                inputCategoriaEdit.type = "text";
                divDataBotao.parentElement.insertBefore(inputCategoriaEdit, divDataBotao);
                
                inputCategoriaEdit.addEventListener('blur', function() {
                    tarefa.categoria = inputCategoriaEdit.value;
                });

            }

            botaoLapisData.onclick = function(){
                var inputDateEdit = document.createElement('input');
                inputDateEdit.classList.add('inputEdit');
                inputDateEdit.type = "date";
                selecionar.parentElement.insertBefore(inputDateEdit, selecionar);
                
                inputDateEdit.addEventListener('blur', function() {
                    var newdata = new Date(inputDateEdit.value);
                    tarefa.data = newdata
                });

            }

            botaoSalvar.onclick = function(){
                pNome.textContent = tarefa.nome;
                pDescricao.textContent = tarefa.descricao;
                pCategoria.textContent = tarefa.categoria;
                pData.textContent = tarefa.data.toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                });
                
                selecionar.parentElement.insertBefore(pNome, selecionar);
                selecionar.parentElement.insertBefore(pDescricao, selecionar);
                selecionar.parentElement.insertBefore(pCategoria, selecionar);
                selecionar.parentElement.insertBefore(pData, selecionar);

                document.querySelectorAll('.pEbotao').forEach(function(div) {
                    div.remove();
                });
            
                
                document.querySelectorAll('.pEbotao .botaoLapis').forEach(function(button) {
                    button.remove();
                });
            
                
                document.querySelectorAll('.inputEdit').forEach(function(input) {
                    input.remove();
                });

                divSalvarEdit.remove();
                botaoSalvar.remove();

            }
            
        }

        notaslist.push(nota);
        console.log(notaslist);

        if(caixa2.style.backgroundColor == "tomato"){
            nota.style.backgroundColor = "tomato";
            atualizarStatus(tarefa.status);
        }else if(caixa2.style.backgroundColor == "orange"){
            nota.style.backgroundColor = "orange";
            atualizarStatus(tarefa.status);
        }else if(caixa2.style.backgroundColor == "mediumseagreen"){
            nota.style.backgroundColor = "mediumseagreen";
            atualizarStatus(tarefa.status);
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

    bSair.onclick = function(){
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

listarToDo.onclick = function() {
    for (var i = 0; i < notaslist.length; i++) {
        console.log(notaslist[i], tarefas[i].status); 

        if (tarefas[i].status !== "to do") {
            notaslist[i].style.display = "none";
        } else {
            notaslist[i].style.display = "block";
        }
    }
}

listarDoing.onclick = function() {
    for (var i = 0; i < notaslist.length; i++) {
        console.log(notaslist[i], tarefas[i].status); 

        if (tarefas[i].status !== "doing") {
            notaslist[i].style.display = "none";
        } else {
            notaslist[i].style.display = "block";
        }
    }
}

listarDone.onclick = function() {
    for (var i = 0; i < notaslist.length; i++) {
        console.log(notaslist[i], tarefas[i].status);

        if (tarefas[i].status !== "done") {
            notaslist[i].style.display = "none";
        } else {
            notaslist[i].style.display = "block";
        }
    }
}

all.onclick = function() {
    for (var i = 0; i < notaslist.length; i++) {
        console.log(notaslist[i], tarefas[i].status);

        notaslist[i].style.display = "block";
    }
}


console.log(tarefas);