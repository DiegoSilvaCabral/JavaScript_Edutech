console.log(`criando listas`);

const lista_exemplo = new Array(
    'elemento 1' ,
    'elemento 2' ,
    'elemento 3'
);

lista_exemplo.push('elemento 4' , 'elemento 5' , 'elemento 6');
lista_exemplo.splice(5,1);

console.log(lista_exemplo);

console.log(lista_exemplo[2]);