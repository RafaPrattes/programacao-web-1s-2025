let itens = []
 
function adicionar(item){    
    let item_valido = true

    if(
        !is_numerico(item.id)||
        is_id_cadastrado(item.id)||
        item.id <= 0 ||
        !is_numerico(item.qtd)||
        item.qtd < 0 ||
        item.nome.length <= 0
    ){
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

function remover(id) {
    let index = itens.findIndex(item => item.id == id)//método findIndex procura pelo id solicitado

    if (index !== -1) {
        itens.splice(index, 1) // Método splice remove 1 item no índice encontrado
        return true
    } else {
        return false
    }
}


//Percorre o array procurando o objeto com o id solicitado e alterar a qtd de acordo com a solicitação
function editar (id, qtd){
//forEach abrevia a escrita do for
let item_valido = true

if(
    !is_numerico ||
    !is_id_cadastrado(id) ||
    !is_numerico(qtd)
){
    item_valido = false
}
if(item_valido){
    // biome-ignore lint/complexity/noForEach: <explanation>
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd;
        }
    });
}

return item_valido;
}
//Função para exportar as funções, não se faz necessário exportar o array de itens pois a app não deve acessar diretamente
module.exports = {
    adicionar,
    listar,
    editar,
    remover
}

function is_id_cadastrado(id){

    let id_cadastrado = false
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            id_cadastrado = true
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
