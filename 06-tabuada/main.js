'use strict'

const tabela = document.getElementById('tabela')
const entrada = document.getElementById('entrada')
const multiplicador = document.getElementById('multiplicador')
const retorno = document.getElementById('retorno')

function tabuada() {

    if (entrada.value == '' || multiplicador.value == '') {
        retorno.textContent = 'Por favor insira os numeros desejados acima. Ex: 7 x 10'
    }

    else {
        tabela.textContent = ''
        retorno.textContent = 'Tabuada do numero escolhido'
        for (let i = 0; i <= parseFloat(multiplicador.value); i++) {
            let novaLinha = document.createElement('tr')
            let celulaExpressao = document.createElement('td')
            let celulaResultado = document.createElement('td')

            tabela.appendChild(novaLinha)
            novaLinha.appendChild(celulaExpressao)
            novaLinha.appendChild(celulaResultado)
            celulaExpressao.textContent = entrada.value + ' x ' + i
            celulaResultado.textContent = entrada.value * i
        }
    }
}

function limpar() {
    tabela.textContent = ''
    entrada.value = ''
    multiplicador.value = ''
    retorno.textContent = 'Tabuada'
}
