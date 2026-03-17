'use strict'

const numInicio = document.getElementById('num-inicio')
const numFim = document.getElementById('num-fim')
const salto = document.getElementById('intervalo')
const lista = document.getElementById('lista')
const resultado = document.getElementById('resultado')

function contador() {

    if (numInicio.value == '' || numFim.value == '' || salto.value == '') {
        resultado.textContent = 'Por favor insira todas as informações acima!'
    }

    else if (parseFloat(numInicio.value) > parseFloat(numFim.value) || parseFloat(salto.value) >= parseFloat(numFim.value)) {
        resultado.textContent = 'Valores incorretos para contagem!'
    }

    else {
        lista.textContent = ''
        resultado.textContent = 'Contagem gerada!'
        for (let i = parseFloat(numInicio.value); i <= parseFloat(numFim.value); i += parseFloat(salto.value)) {
            let criarLista = document.createElement('li')
            criarLista.textContent = i
            lista.appendChild(criarLista)
        }
    }
}

function limpar() {
    lista.textContent = ''
    resultado.textContent = 'Resultado'
    numFim.value = ''
    numInicio.value = ''
    salto.value = ''
}