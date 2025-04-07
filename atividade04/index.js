//Ao inves de banco de dados, usar um array para armazenar os itens do estoque


//Carrega o modulo especificado () na variavel lista
const lista = require('./estoque')
const express = require('express')
//Carrega o módulo express

//cria uma aplicacao do tipo express
const app = express()


app.get('/', (req, res)=>{
    let html = '<h1>Estoque</h1>'
    res.send(html)
})

app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
//Number.parseFloat= é um método que faz a conversão de string para número
    let id = Number.parseFloat(req.params.id)
    let nome = (req.params.nome)
    let qtd = (req.params.qtd)

    res.send(`${qtd} produto(s) com o id ${id} e nome ${nome} fora(m) adicionado(s) com sucesso!\n`)
})

app.get('/listar', (req, res)=>{
    const produtos = (req.params.produtos)
    if (produtos.length){
        console.log('Não há produtos em estoque!')
    } else {
        console.log(`${produtos}`)
    }
    res.send(`Os produtos em estoque são: ${produtos} \n`)

})

app.get('/remover/:id', (req, res)=>{
    const id = Number.parseFloat(req.params.id)

    res.send(`O produto de id número: ${id} foi removido com sucesso\n`)
})

app.get('/editar/:id/:qtd', (req, res)=>{
    const id = Number(req.params.id)
    const qtd = Number(req.params.qtd)

    res.send('Digite o id do produto a ser editado: ')
})

//Declara a porta 8081
const PORT = 8081

app.listen(PORT, ()=>{
    console.log(`App rodando na porta correta ${PORT}`)})





