import Comidas from './Comidas.js';

export const salvarComida = async () => {

	const comidas = new Comidas();

	const dataComidas = await comidas.pegarComidas();

	const table = document.querySelector('.main_table tbody');

	// console.log(table);

	dataComidas.forEach((item) => {
		let nome = document.createElement('td')
		nome.innerHTML = item.comida.nome;

		let descricao = document.createElement('td');
		descricao.innerHTML = item.comida.descricao;

		let valorUnitario = document.createElement('td');
		valorUnitario.innerHTML = item.comida.valorUnitario;

		let dataValidade = document.createElement('td');
		dataValidade.innerHTML = item.comida.dataValidade;

		let peso = document.createElement('td');
		peso.innerHTML = item.comida.peso;

		let tipo = document.createElement('td');
		tipo.innerHTML = item.comida.tipo;

		let input = document.createElement('td');
		input.innerHTML = `<input type="checkbox" value="${item.codigo}">`;

		let row = document.createElement('tr');

		row.appendChild(nome);
		row.appendChild(descricao);
		row.appendChild(valorUnitario);
		row.appendChild(dataValidade);
		row.appendChild(peso);
		row.appendChild(tipo);
		row.appendChild(input);

		row.classList.add('secondary_tr');
		table.appendChild(row);
	});
};

window.onload = salvarComida();

// document.getElementById("buttonSave").addEventListener("click", salvarComida);