//Tipos de variáveis - Aula 25/02

//const nao pode ser declarado novamente e nem atualizado
const n = 3;

//console.log('n = ' + n);

//var pode ser alterado e o último valor é considerado
var j = 2;
var j = 3;

//console.log('j= ' + j);

let i = 5;
i = 6; // não precisa repetir o let

//console.log('i ='+ i)

//5 tipos básicos: String, NUmber, Null, Boolean e Undefined

let minhaString = 'Texto String'
minhaString = 'Text'
minhaString = "Texto ' String"

//console.log(minhaString)


let nome = 'Rafa'
cpf = "123456789"
telefone = "456"

let tString = `Meu nome é ${nome}. Meu cpf ${cpf}, e meu número é ${telefone}`//concatenação
//console.log(tString)

let x = 5.0
x = 5
x = 4
//let não permite a mudança de variáveis


//console.log(typeof x) // --> todo number 
//console.log(typeof tString)


//Boolean
let verdadeiro = true
let falso = false

//null--> representa o valor de algo, nulo, a conexao deu errado e está vazia: let conection = conectionDB()

//Undefined--> declara variável enão define nada: let conectionDB = null;


let y = 3 * 2
console.log(y)

