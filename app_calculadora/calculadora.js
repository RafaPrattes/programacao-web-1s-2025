function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function dividir(a, b){
    return a / b
}

// modulo: um arquivo a parte, e quando precisar usar as funções
module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}