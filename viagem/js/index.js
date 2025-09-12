const km = document.querySelector('#km')
const kml = document.querySelector('#kml')
const preco2 = document.querySelector('#preco2')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click', Calculo)

function Calculo() {
    let valor = Number(km.value) / Number(kml.value)
    let valorFinal = valor * Number(preco2.value)
    resultado.textContent = `O valor total da viagem será R$ ${valorFinal.toFixed(2)}`
}