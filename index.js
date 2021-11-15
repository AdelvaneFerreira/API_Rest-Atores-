const express = require('express')
const roteador = require('./roteador')
const {senha} = require('./intermediarios')

const app = express()
app.use(express.json())

//Middleware
app.use(senha) //valida a senha antes de permitir o acesso.

app.use(roteador)


app.listen(8000)