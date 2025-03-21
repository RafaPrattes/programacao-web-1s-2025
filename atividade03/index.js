const calc = require('./calculadora')
const express = require('express')

const app = express()


app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`)
})

app.get('/somar/:a/:b', (req, res)=>{
//Number.parseFloat= é um método que faz a conversão de string para número
    const a = Number.parseFloat(req.params.a)
    const b = Number.parseFloat(req.params.b)
//foi necessário criar as variaveis a, b e result para poder usar o req e referenciar
    const result = a + b
    res.send(`O resultado da soma entre ${a} e ${b} é: ${result}\n`)
})

app.get('/subtrair/:a/:b', (req, res)=>{
    const a = Number.parseFloat(req.params.a)
    const b = Number.parseFloat(req.params.b)

    const result = a - b
    res.send(`O resultado da subtração entre ${a} e ${b} é: ${result}\n`)
})

app.get('/multiplicar/:a/:b', (req, res)=>{
    const a = Number.parseFloat(req.params.a)
    const b = Number.parseFloat(req.params.b)

    const result = a * b
    res.send(`O resultado da multiplicação entre ${a} e ${b} é: ${result}\n`)
})

app.get('/dividir/:a/:b', (req, res)=>{
    const a = Number.parseFloat(req.params.a)
    const b = Number.parseFloat(req.params.b)

    if (b === 0) {
        return res.send("Erro: não é possível dividir por zero.\n")
    }

    const result = a / b
    res.send(`O resultado da divisão entre ${a} e ${b} é: ${result}\n`)
})

const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`app rodando na porta correta ${PORT}`)})
