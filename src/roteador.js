const express = require('express')
const controle = require('./Controladores/atores')

const roteador = express()

//Get - consulta os elementos existentes
roteador.get("/atores", controle.consultaAtores)

//Get - consulta o elemento através do Id
roteador.get('/atores/:idConsultado', controle.consultaID)

//Post - adiciona um novo elemento na lista
roteador.post('/atores', controle.criarNovo)

//Patch - edita um elemento da lista
roteador.patch('/atores/:idConsultado', controle.editarAtor)

//Put - substitui um elemento da lista
roteador.put("/atores/:idconsultado", controle.substituir)

// Delete - apaga um elemento da lista
roteador.delete("/atores/:idconsultado", controle.excluir)

module.exports = roteador