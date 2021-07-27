console.log(`operadores lógicos`);

const lista_exemplo = new Array(
    'Maconha do sherek' ,
    'Heroino' ,
    'coca da ina'
);

const idade_do_comprador = 17;
const acompanhado = Math.round(Math.random() * 1);

if (idade_do_comprador >= 18) {
    console.log(`Tu tem ${idade_do_comprador} anos, pode comprar, mas não fala pra ninguém tá ligado?`);
} else {
    if (acompanhado == 1) {
        console.log(`Beleza menór, tu ta acompanhado truta`);
    } else {
        console.log(`tu tem ${idade_do_comprador} tá louco? Vou vender é nada`);
        lista_exemplo.splice(0,3);
    }
}

console.log(`drogas do dolinho: ${lista_exemplo}`);
