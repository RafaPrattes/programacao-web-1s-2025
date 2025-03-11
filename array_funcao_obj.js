
//let numA = 1
///let numB = 3

//let operacoes = [3, 2, 1, true, 'aaa']



// dry: dont repeat yourself
//function imprimirResultado(operando1, operando2, operacao, resultado){
 //   console.log(`A ${operacao} entre ${operando1} e ${operando2} é ${resultado}`);

//}

//numC = numA + numB
//imprimirResultado(numA, numB, operacoes[2], numC)

//numC = numA - numB
//console.log(`O resultado da subtração entre numA e numB é ${subtracao}`)

//numC = numA * numB
//console.log(`O reultado da multiplicação entre numA e numB é ${multiplicacao}`)

//numC = numA / numB
//console.log(`O resultado da divisão entre numA e numB é ${divisao}`)


//Matrizes
var matriz =[
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
]

console.log(matriz)

function imprimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linha = ' '
        for(let j = 0; j < A[i].length; j++)
        {
           console.log(A[i][j] + '\t')
        }
        console.log(linha)
    }
}

//imprimirMatriz(matriz)
//Objetos--> possuem valor e tipo
let capitais = {
    DF: 'Brasília',
    DDD_DF: 61,
    SP: 'São Paulo',
    RJ: 'Rio de Janeiro',
    MG: 'Minas Gerais',
    DDD_MG: 38,
}

//console.log(capitais.DF + ' - ' + capitais.DDD_DF)

for ( chave in capitais){
   // console.log(chave)
}

function verficarParidade(n){
  if (n % 2 == 0){
    return true
  }
  return false
}
let n = 3
console.log(`verificarParidade(${n} = ${verficarParidade(n)}`)
