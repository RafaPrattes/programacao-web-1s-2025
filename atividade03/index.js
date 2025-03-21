const calc = require('./calculadora')
const express = require('express')

const app = express()


app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`)
})

app.get('/somar/:a/:b', (req, res)=>{
    res.send(`O resultado da soma entre ${a} e ${b} é:\n`)
})

app.get('/subtrair/:a/:b', (req, res)=>{
    res.send(`O resultado da subtração entre ${a} e ${b} é:\n`)
})

app.get('/multiplicar/:a/:b', (req, res)=>{
    res.send(`O resultado da multiplicação entre ${a} e ${b} é:\n`)
})

app.get('/dividir/:a/:b', (req, res)=>{
    res.send(`O resultado da divisão entre ${a} e ${b} é:\n`)
})

const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`app rodando na porta correta ${PORT}`)})
