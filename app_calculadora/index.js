const calc = require('./calculadora') //modularização: permite o acesso a funcoes declaradas em outro arquivo
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('Olá, mundo')
})

app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`)
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log('o app rodando na porta ' + PORT)
})

