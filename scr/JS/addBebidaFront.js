import Bebidas from './Bebidas.js';

export const salvarBebida = async () => {

	let codigo = document.querySelector('#codigo').value;
	let nome = document.querySelector('#nome').value;
	let descricao = document.querySelector('#descricao').value;
	let valorUnitario = document.querySelector('#valorUnitario').value;
	let dataValidade = document.querySelector('#dataValidade').value;
	let litros = document.querySelector('#litros').value;
	let tipo = document.querySelector('#tipo').value;

	const novaBebida = new Bebidas(codigo, nome, descricao, valorUnitario, dataValidade, litros, tipo);

	await novaBebida.cadastrarBebidas();
	console.log(await novaBebida.pegarBebidas());

	document.location.reload();

};

document.getElementById("buttonSave").addEventListener("click", salvarBebida);