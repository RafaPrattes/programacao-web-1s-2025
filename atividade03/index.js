//Carrega o modulo especificado () na variavel calc
const calc = require('./calculadora')
const express = require('express')
//Carrega o módulo express

//cria uma aplicacao do tipo express
const app = express()


app.get('/', (req, res)=>{
    let html = '<h1>Calculadora</h1>'
    html += '<h3>Rotas disponíveis:</h3>'
    html += '<p>Rotas disponíveis:</p>'
    html += '<p>/somar/:a/:b <a href="/somar/1/2">testar</a></p>'
    html += '<p>/subtrair/:a/:b <a href="/subtrair/1/2">testar</a></p>'
    html += '<p>/multiplicar/:a/:b <a href="/multiplicar/1/2">testar</a></p>'
    html += '<p>/dividir/:a/:b <a href="/dividir/1/2">testar</a></p>'

    res.send(html)
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
    //outra forma de concatenar:
    //res.send(`${a} - ${b} = ${calc.subtrair(a,b)}`)
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
        return res.send("<h1>Erro: não é possível dividir por zero.\n<h1>")
    }

    const result = a / b
    res.send(`O resultado da divisão entre ${a} e ${b} é: ${result}\n`)
})

//Declara a porta 8080
const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`app rodando na porta correta ${PORT}`)})
