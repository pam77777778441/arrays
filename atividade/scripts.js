//atividade 1
// const nomes = [ 'Pamela', 'Jailton', 'Juliana', 'Caio' ]
    
// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes)
// }


//atividade 2
// const numeros = [1, 2, 3, 4, 5]

// let soma = 0

// for(const numero of numeros) {
//     soma += numero
// }

// console.log('A soma é: ' , soma)


//atividade 3
// const frutas = ['Abacaxi', 'Morango', 'Uva']

// frutas.push('Laranja')
//  console.log(frutas)

//  frutas.pop('Laranja')
//  console.log(frutas)

//  frutas.unshift('Melão')
//  console.log(frutas)

//  frutas.shift()
//  console.log(frutas)


// atividade 02/09

let biblioteca = []

 biblioteca.push({
    titulo: 'É assim que acaba',
    autor: 'Collen Hover',
    numeroDePag: 1000,
    foiLido: true
 });


 
 biblioteca.push({
    titulo: 'Verity',
    autor: 'Collen Hover',
    numeroDePag: 650,
    foiLido: true
 });


 
 biblioteca.push({
    titulo: 'O lado feio do amor',
    autor: 'Collen Hover',
    numeroDePag: 500,
    foiLido: true
 });

 console.log('biblioteca:')

 for (const livro of biblioteca ) {
console.log(`título: ${livro.titulo}, autor: ${livro.autor}, Páginas: ${livro.numeroDePag} , Lido: ${livro.foiLido}`)
 }

 console.log('')

 let novaBiblioteca = []
 for (const livro of biblioteca) {
    if(livro.titulo !== 'Verity') {
        novaBiblioteca.push(livro)
    }
 }

 biblioteca = novaBiblioteca

 console.log('Atualização biblioteca')

 for (const livro of biblioteca) {
    console.log(`título: ${livro.titulo}, autor: ${livro.autor} , Páginas: ${livro.numeroDePag}, Lido: ${livro.foiLido}`)
 }
 
 console.log('')

 for (const livro of biblioteca) {
    if (livro.titulo === 'È assim que acaba') {
        livro.lido = true
        break
    }
 }

console.log('Atualizada')
for (const livro of biblioteca) {
    console.log(`título: ${livro.titulo}, autor: ${livro.autor}, Páginas: ${livro.numeroDePag}, Lido: ${livro.foiLido}`)
}


