import {cliente} from "./Cliente.js";
import {conta_corrente} from "./Conta_corrente.js";

const cliente_1 = new cliente('Reko', 1840572409);

const cliente_2 = new cliente('Alice', 73518401609);
//conta corrente


const cliente_1_conta_corrente = new conta_corrente(1540, cliente_1);

const cliente_2_conta_corrente = new conta_corrente(1143, cliente_2);

console.log(cliente_1_conta_corrente);