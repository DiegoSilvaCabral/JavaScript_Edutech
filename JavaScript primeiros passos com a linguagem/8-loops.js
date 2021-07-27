console.log(`loops`);

const lista_exemplo = new Array(
    'Elemento 1' ,
    'Elemento 2' ,
    'Elemento 3'
);

const verdadeiro = true;
const falso = false;
const numero = 17;
let random = false;
const elemento = 'Elemento 4';

console.log(`\nElementos: [${lista_exemplo}]\n`);

const acesso_permitido = numero >= 18 || verdadeiro == true;

let contador = 0;
let encontrar = false;

while (contador < lista_exemplo.length) {
    if (lista_exemplo[contador] == elemento) {
        console.log(`elemento encontrado na posição ${contador}`);
        encontrar = true;
        break;
    } else {
        contador++;
    }
}

if (encontrar == false) {
    console.log(`${elemento} não econtrado`);
}