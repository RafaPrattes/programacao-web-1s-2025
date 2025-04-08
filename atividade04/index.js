//Ao inves de banco de dados, usar um array para armazenar os itens do estoque
//Evidência de ausência não prova ausência de evidência (não há como provar nada)

/**
 * 1° - Para ser uma aplicação web deve ser inicializado o Express (framework para Node)
 * 
 * 2° - NPM é o gerenciador de pacotes Node, é usado para inicializar os pacotes necessários para a aplicação
 * 
 * 3° - NPM init é feito para inicializar a aplicação - 1° passo para transformar em uma app web
 * 
 * 4° - Ir até a pasta correta para inicializar o NPM
 * 
 * 5° - NPM install express@4.21.2 - Comando para instalar os pacotes  
 * 
 * 6° - Importar o express por meio do require
 * 
 * 7° - Comando -> node index.js inicia a aplicação e a porta começa a escutar as requisições
 * 
 * 8° - 
 */


const estoque = require('./estoque')//Carrega o modulo especificado () na variavel lista
const express = require('express')//Carrega o módulo express
const app = express()//cria uma aplicacao do tipo express

//Requisição do tipo get com dois parâmetros req(requisição) e res(resposta)
app.get('/', (req, res)=>{
    let html = '<h1>Estoque</h1>'
    html += '<h3>Rotas disponíveis:</h3>'
    html += '<p>/adicionar/:id/:nome/:qtd</p>'
    html += '<p>/listar</p>'
    html += '<p>/remover/:id</p>'
    html += '<p>/editar/:id/:qtd</p>'
    res.send(html)
})

app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
//Number.parseFloat= é um método que faz a conversão de string para número
//Declarar um objeto e colocar os atributos, sempre dentro de chaves
let item = {
    id: Number(req.params.id), //Para recuperar o item que está sendo digitado pelo user
    nome: req.params.nome,
    qtd: Number(req.params.qtd)//Usar o método Number para converter os valores para numeros

}
    res.send(estoque.adicionar(item))
})

app.get('/listar', (req, res)=>{

    res.send(estoque.listar())
})

app.get('/remover/:id', (req, res)=>{
    let id = Number(req.params.id)
    let sucesso = estoque.remover(id)

    if (sucesso) {
        res.send(`O produto de id número: ${id} foi removido com sucesso!\n`)
    } else {
        res.send(`Erro: Produto com id ${id} não encontrado.`)
    }
})

app.get('/editar/:id/:qtd', (req, res)=>{
    let id = Number(req.params.id)
    let qtd = Number(req.params.qtd)
    res.send(estoque.editar(id, qtd))

    res.send('Digite o id do produto a ser editado: ')
})

//Declara a porta 8081
const PORT = 8081

//A aplicação web fica escutando as requisições em determinada porta
app.listen(PORT, ()=>{
    console.log(`App rodando na porta correta ${PORT}`)})
