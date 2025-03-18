function transporMatriz(A){
    console.log("Matriz\n")
    for(let i = 0; i < A.length; i++){
        let linha = ""
        for (let j = 0; j < A[0].length; j++){
            linha += A[i][j] + "\t"
        }
        console.log(linha)
    }
// visita cada elemento das colunas (1,3,5) e depois visita cada elemento das linhas
    console.log("\nTransposta\n")
    for(let j = 0; j < A[0].length; j++){ 
        let linha = ""
        for(let i = 0; i < A.length; i++){
            linha += A[i][j] + "\t"
        }
        console.log(linha)
    }
}

/*  1 2 
    3 4
    5 6
*/
let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
]
transporMatriz(matriz)