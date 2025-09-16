'use strict'
//target(alvo)guarda onde o evento aconteceu

 async function pesquisarCep(cep){
    // https://corsproxy.io/?url
    const url = `https://cdn.apicep.com/file/apicep/${cep}.jsons`
    const response = await fetch(url)
    const data = await response.json()
    return data
}
// const url = `https://cdn.apicep.com/file/apicep/01022-000.json`
// const response = await fetch(url)
// const data = await response.json()
// console.log(data)

async function preencherCampos({ target }) {
    const infoCep = await pesquisarCep(target.value)
    document.getElementById('endereco').value= infoCep.address
    document.getElementById('bairro').value=infoCep.district
    document.getElementById('estado').value=infoCep.state
    document.getElementById('cidade').value=infoCep.city
    console.log(infoCep)
}

document.getElementById('cep').addEventListener('focusout', preencherCampos)