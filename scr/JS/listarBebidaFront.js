import Bebidas from './Bebidas.js';

export const salvarBebida = async () => {

	const bebida = new Bebidas();

	const dataBebida = await bebida.pegarBebidas();

	const table = document.querySelector('.main_table tbody');

	dataBebida.forEach((item) => {
		let nome = document.createElement('td')
		nome.innerHTML = item.bebidas.nome;

		let descricao = document.createElement('td');
		descricao.innerHTML = item.bebidas.descricao;

		let valorUnitario = document.createElement('td');
		valorUnitario.innerHTML = item.bebidas.valorUnitario;

		let dataValidade = document.createElement('td');
		dataValidade.innerHTML = item.bebidas.dataValidade;

		let litros = document.createElement('td');
		litros.innerHTML = item.bebidas.litros;

		let tipo = document.createElement('td');
		tipo.innerHTML = item.bebidas.tipo;

		let input = document.createElement('td');
		input.innerHTML = `<input type="checkbox" value="${item.codigo}">`;

		let row = document.createElement('tr');

		row.appendChild(nome);
		row.appendChild(descricao);
		row.appendChild(valorUnitario);
		row.appendChild(dataValidade);
		row.appendChild(litros);
		row.appendChild(tipo);
		row.appendChild(input);

		row.classList.add('secondary_tr');
		table.appendChild(row);
	});
};

window.onload = salvarBebida();

document.getElementById("btnSave").addEventListener("click", () => {
	let inputs = document.querySelectorAll('input');
	let selected = [];
	inputs.forEach((item) => {
		if (item.checked) {
			selected.push(item.value);
		}
	})

});