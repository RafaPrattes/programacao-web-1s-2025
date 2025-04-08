let itens = []
 
function adicionar (item){    

    let item_valido = true

    if(
        !is_numerico(item.id)||
        is_id_cadastrado(item.id)||
        item.id <= 0 ||
        !is_numerico(item.qtd)||
        item.qtd < 0 ||
        item.nome.length <= 0)
        {
       item_valido = false 
    }
    if(item.nome.length <= 0){
        item_valido = false
    }

    if(item_valido){
    itens.push(item)//o método push adiciona o que o usuário inserir dentro de itens
    }
    return item_valido
}

function listar(){
    return itens
}

//Percorre o array procurando o objeto com o id solicitado e alterar a qtd de acordo com a solicitação
function editar (id, qtd){
//forEach abrevia a escrita do for

if(
    !is_numerico ||
    !is_id_cadastrado(id) ||
    !is_numerico(qtd)
){
    item_valido = false
}
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd
        }
    })
    return true
}

function is_id_cadastrado(id){

    let id_cadastrado = false
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd
        }
    })
    return id_cadastrado
}

function is_numerico(n){
    if(isNaN(n)|| n == null){
        return false
    }
    return true
}
//Função para exportar as funções, não se faz necessário exportar o array de itens pois a app não deve acessar diretamente
module.exports = {
    adicionar,
    listar,
    editar
}