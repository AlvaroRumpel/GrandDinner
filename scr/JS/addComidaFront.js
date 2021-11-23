import Comidas from './Comidas.js';

export const salvarComida = async () => {

	let codigo = document.querySelector('#codigo').value;
	let nome = document.querySelector('#nome').value;
	let descricao = document.querySelector('#descricao').value;
	let valorUnitario = document.querySelector('#valorUnitario').value;
	let dataValidade = document.querySelector('#dataValidade').value;
	let peso = document.querySelector('#peso').value;
	let tipo = document.querySelector('#tipo').value;

	const novaComida = new Comidas(codigo, nome, descricao, valorUnitario, dataValidade, peso, tipo);

	await novaComida.cadastrarComida();
	console.log(await novaComida.pegarComidas());

	window.reload();

};

document.getElementById("buttonSave").addEventListener("click", salvarComida);