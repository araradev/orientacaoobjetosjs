import {Cliente} from "./Cliente.js"
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const gerente = new Gerente("Jurandir", 20000, 11122233344);
const diretor = new Diretor("Bartolomeu", 85000, 11122233355);
diretor.cadastrarSenha("123");
gerente.cadastrarSenha("456");

// const contaCorrente = new ContaCorrente(cliente1, 1001);
// const contaPoupanca = new ContaPoupanca(10000, cliente1, 1001);
// const contaSalario = new ContaSalario(cliente1);

const cliente = new Cliente("Ricardo", 11122233309, "555");
const estaLogado = SistemaAutenticacao.login(diretor, "12s3");
const estaLogado2 = SistemaAutenticacao.login(gerente, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "555");

console.log(estaLogado);
console.log(estaLogado2);
console.log(clienteEstaLogado);