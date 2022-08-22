//Define uma variavel do tipo array
const listaNomes = ['jose', 'maria', 'carlos'];
const listaProdutos = ['Teclado', 'Branco', 50.80, 10, true];
const listaAlunos = ['Carol', 'Milena','Ana', 'Heitor', 'Japo', 'Larissa', 'Arthur'];
const listaDisciplina = ['Programacao Back-End', 'Programacao Front-End','Banco de Dados', 'Desenvolvimento Mobile'];


//Verificando o tipo do array
console.log( '\n' + typeof(listaProdutos) );

//Pedindo para mostrar o 3 item do array
console.log(listaProdutos[3]); 


let qtde = listaAlunos.length;
let cont = 0;

// while(cont < qtde){
//     console.log('O aluno da turma DS2M e: ' + listaAlunos[cont]);
//     cont++ 
// }



// for(let cont = 0; cont < listaAlunos.length; cont++){
//     console.log('O aluno da turma DS2M e: ' + listaAlunos[cont]);
// }


listaAlunos.forEach(function(item){
    console.log('O aluno da turma DS2M e: ' + item);
})

//Adicionando novas elementos no array
listaAlunos.push('Xandaoooooooo', 'Jesuss');

//Remove o ultimo elemento do array
listaAlunos.pop();

//Adicionando elementos no array porem no inicio 
listaAlunos.unshift('Enzo');

//Remover o primeiro elemento do array
listaAlunos.shift();


//Pesquisando valores em um array e retornando o seu indice
    // se retornar -1, significa que nao foi encontrado o item
let indice = listaAlunos.indexOf('Ana');
console.log(indice);

//Remove o item especifico
listaAlunos.splice(indice, 1);

//Remove todos os itens a partir do primeiro ate o item escolhido
listaAlunos.splice(0, indice+1);

//Remove tal elemento para baixo
listaAlunos.splice(indice);
console.log(listaAlunos);

//Criar uma copia de um array(mais para seguranca) 
const listaNovosAlunos = listaAlunos.slice();
console.log(listaNovosAlunos);

listaNovosAlunos.push('Enzo', 'Pedro','Molera', 'Dodo', 'Ana', 'Sla');

//Adicionando um array de itens dentro de outro array
listaNovosAlunos.push(listaDisciplina);

//Chamar o primeiro elemento do array que esta dentro de outro array
console.log(listaNovosAlunos[8][0]);

//Procura o elemento banco de dados do array secundario
console.log(listaNovosAlunos[8].indexOf('Banco de Dados'));




