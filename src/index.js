const express = require('express')
const roteador = require('./roteador')
const {senha} = require('./intermediarios')

const app = express()
app.use(express.json())


app.use(senha) //Middleware de autenticação
app.use(roteador)


app.listen(8000)