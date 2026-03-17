'use strict'

const valorTotal = document.getElementById('valor-total')
const parcelas = document.getElementById('qtd-parcelas')
const juros = document.getElementById('juros')
const valorParcela = document.getElementById('valor-parcela')
const simulacao = document.getElementById('simulacao')
const retorno = document.getElementById('retorno')

function financiamento() {
    simulacao.textContent = ''

    if (valorTotal.value == '' || parcelas.value == '' || juros.value == '' || valorParcela.value == '') {
        retorno.textContent = 'Por favor preencha todas as informações acima para prosseguir!'
    }

    else {
        retorno.textContent = 'Simulação realizada!'
        let saldoDevedor = parseFloat(valorTotal.value)
        let taxa = parseFloat(juros.value) / 100
        let jurosMes = saldoDevedor * taxa

        for (let i = 1; i <= parseFloat(parcelas.value); i++) {
            let novaLinha = document.createElement('tr')
            let celulaMes = document.createElement('td')
            let celulaJuros = document.createElement('td')
            let celulaParcela = document.createElement('td')
            let celulaTotalMes = document.createElement('td')
            let celulaSaldo = document.createElement('td')
            
            novaLinha.appendChild(celulaMes)
            novaLinha.appendChild(celulaJuros)
            novaLinha.appendChild(celulaParcela)
            novaLinha.appendChild(celulaTotalMes)
            novaLinha.appendChild(celulaSaldo)
            simulacao.appendChild(novaLinha)

            celulaJuros.classList.add('col-juros')
            celulaTotalMes.classList.add('col-total')
            celulaSaldo.classList.add('col-saldo')

            celulaMes.textContent = i
            jurosMes = saldoDevedor * taxa
            let totalMensal = parseFloat(valorParcela.value) + jurosMes
            saldoDevedor = saldoDevedor + jurosMes - parseFloat(valorParcela.value)
            
            celulaParcela.textContent = parseFloat(valorParcela.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

            celulaJuros.textContent = jurosMes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

            celulaTotalMes.textContent = totalMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

            celulaSaldo.textContent = saldoDevedor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
        }
    }
}

function limpar() {
    retorno.textContent = 'Realize uma nova simulação!'
    simulacao.textContent = ''
    parcelas.value = ''
    valorTotal.value = ''
    juros.value = ''
    valorParcela.value = ''
}
