'use strict'
//target(alvo)guarda onde o evento aconteceu

 async function pesquisarCep(){
    // https://corsproxy.io/?url
    const url = `https://brasilapi.com.br/api/cep/v1/01025-020`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}


async function preencherCampos({ target }) {
    const infoCep = await pesquisarCep(target.value)
    document.getElementById('endereco').value= infoCep.neighborhood
    document.getElementById('bairro').value=infoCep.street
    document.getElementById('estado').value=infoCep.state
    document.getElementById('cidade').value=infoCep.city
}

document.getElementById('cep').addEventListener('focusout', preencherCampos)