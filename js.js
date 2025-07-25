    let tipoSelecionado = ''

    function selecionarTipo(tipo) {
        tipoSelecionado = tipo
    }

    function NovaTarefa(){
        document.getElementById("loginOverlay").style.display = "flex"
    }

    function FecharTarefa(){
        document.getElementById("loginOverlay").style.display = "none"
    }
    
    document.querySelector('.button-create-task').addEventListener('click', function () {
        const nomeTarefa = document.querySelector('.input-tarefa').value
        if (nomeTarefa.trim() === '') return

        const novaTarefa = document.createElement('div')
        novaTarefa.classList.add('tarefa-item')
        novaTarefa.id = 'new-task'
        novaTarefa.innerHTML = `
            <input class="checkbox" type="checkbox">
            <div>${nomeTarefa}</div>
            <div>${tipoSelecionado}</div>
            <div class="div-button-delete">
                <div id="button-delete" onclick="this.parentElement.parentElement.remove()">X</div>
            </div>`
        document.querySelector('.main-left').appendChild(novaTarefa)

        FecharTarefa()
        document.querySelector('.input-tarefa').value = ''
        document.querySelector('#text-descriçao').value = ''
        tipoSelecionado = ''
    });