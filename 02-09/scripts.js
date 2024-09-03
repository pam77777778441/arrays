// // sem o uso de objetos
// let nomes = []
// let emails = []
// let telefones = []

// nomes.push('Carla')
// emails.push('carla@gmail.com')
// telefones.push('79559494')


// console.log(nomes[0])
// console.log(email[0])
// console.log(telefones[0])


// const pessoa = {
//     id: 1,
//     primeiroNome: 'Carla' ,
//     ultimoNome: 'Silva',
//     idade: 36 ,
//     // temFilhos: true,
//     endereco: {
//         rua: 'nome da rua',
//         cidade: 'Salvador'
//     },
//     tecnologias: ['React', 'Javascript']
// }
// console.log(typeof pessoa)
// // console.log(pessoa)


// console.log(pessoa.id)
// console.log(pessoa.primeiroNome)
// console.log(pessoa.idade)

// const carro = {}


// carro.marca = 'Toyota'
// carro.modelo = 'Corolla'
// carro.ano = 2022
// carro.cor = 'Preto'

// console.log(carro)

// const titulo = 'Roube como um artista'
// const autor = 'Austin kleon'
// const publicacao = 2015


// const livro = {
//     title: titulo,
//     autor: autor,
//     publicacao: publicacao
// }

// console.log(livro)

// // mesmo sendo declarado como constante, conseguimos alterar as propriedades
// livro.titulo = 'Mostre seu trabalho'

// console.log(livro)

// // não consigo alterar a declaração do objeto, quando criado como const

// livro = 'Siga em frente'

// const pessoa = {
//     id:1,
//     primeiroNome: 'Carla',
//     ultimoNome: 'Silva',
//     idade: 34 ,
//     'tem-filhos': true
// }

// const key = "id"

// // undefined
// console.log(pessoa.key)

// console.log(pessoa[key])
// console.log(pessoa['tem-filhos'])
// console.log(pessoa['ida'+'de'])


// const titulo = 'Roube como um artista'
// const autor = 'Austin kleon'
// const publicacao = 2015


// const livro = {
//     title: titulo,
//     autor: autor,
//     publicacao: publicacao
// }
// delete livro.titulo
// console.log(livro)




// const aluno = {
//     nome: Pamela,
//     idade: 22,
//     curso: Engenharia de software,
// }

// console.log(aluno)



// exercicios

// const aluno = {
//  nome : 'Pamela',
//  idade : 22,
//  curso : 'Engenharia de software'

// }
// // acessar o nome do aluno
// console.log(aluno.nome)

// // adicionar a propriedade nota ao objeto
// aluno.nota = 9
// console.log(aluno)

// // alterar o valor da propriedade curso para um novo valor
// // 
// aluno.curso = 'matemática'
// console.log(aluno)

// let ponto1 = { x:0, y:0}
// let ponto2 = { x:0, y:0}

// console.log(ponto1 === ponto2)  //R:false

// passagem por referência
// let ponto1 = {x:0 , y:0}
// let ponto2 = ponto1

// console.log(ponto1 === ponto2) //true

// let ponto1 = {x:0 , y: 0}
// let ponto2 = ponto1

// ponto2.x = 10

// console.log(ponto2.x)
// console.log(ponto1.x)

// passagem por valor
// let nome = 'Carla'
// let nome2 = nome

// nome2 = 'Marcelo'

// console.log(nome)
// console.log(nome2)

// const livro = {
//     titulo: 'Clean Code',
//     autor: 'Robert C. Martin',
//     paginas: 500,
//     idioma: 'English',
//     estaDisponivel: true
// }

// for (const key in livro) {
//     console.log(key)
// }



// const pessoa = {
//     id: 1,
//     nome: 'Marcelo'
// }

// for (const key in pessoa) {
//     console.log(pessoa[key])
//     // traz o valor das propriedades dinamicamente
// }

// console.log(pessoa[key])



// const livro = {
//     titulo: 'Clean Code',
//     autor: 'Robert C. Martin',
//     paginas: 500,
//     idioma: 'English',
//     estaDisponivel: true
// }


// const livro2 = {}

// for (const key in livro ) {
//    livro2[key] = livro[key]
// }
// console.log(livro)
// console.log(livro2)

// console.log(livro === livro2) //false
// const carros = []

// const carro1 = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2023,
//     cor: 'Preto'
// }
// const carro2 = {
//     marca: 'Ford',
//     modelo: 'fiesta',
//     ano: 2020,
//     cor: 'Branco'
// }
// const carro3 = {
//     marca: 'Honda',
//     modelo: 'Civic',
//     ano: 2021,
//     cor: 'Prata'
// }

// carros.push(carro1, carro2, carro3)

// console.log(carros)



// for (let i = 0; i < carros.length; i++) {
//     console.log(`Marca:${carros[i].marca}, Modelo: ${carros[i].modelo} ,
//          Ano: ${carros[i].ano} , Cor: ${carros[i].cor}`);
// }

// for (const carro of carros) {
//     console.log(`Marca:${carros[i].marca}, Modelo: ${carros[i].modelo} ,
//         Ano: ${carros[i].ano} , Cor: ${carros[i].cor}`);
// }



// const pessoas = []
// const quatidadePessoas = Number(prompt('Quantas pessoas deseja cadastrar?'))

// for(let i = 0; i < quatidadePessoas; i++) {
//     const nome = prompt('digite o nome da pessoa')
//     const idade = prompt('digite a idade da pessoa')
//     const cidade = prompt('digite a cidade da pessoa')

//     pessoas.push({
//         nome,
//         idade,
//         cidade
//     })

// }
// console.log(pessoas)

// continuar = confirm('Deseja continuar cadastrando?')

// console.log(continuar)


// const pessoas = []

// let continuar = true

// while (continuar) {
//     const nome = prompt('digite o nome da pessoa')
//     const idade = prompt('digite a idade da pessoa')
//     const cidade = prompt('digite a cidade da pessoa')
    
//     pessoas.push({
//         nome,
//         idade,
//         cidade
//     })

//     continuar = confirm('Deseja cadastrar outra pessoa?')
// }

// console.log(pessoas)



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

