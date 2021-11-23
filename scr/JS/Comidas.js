import Produtos from './Produtos.js';

export default class Comidas extends Produtos {
	constructor (codigo, nome, descricao, valorUnitario, dataValidade, peso, tipoComida) {
		super(codigo, nome, descricao, valorUnitario, dataValidade);
		this.peso = peso;
		this.tipoComida = tipoComida;
	}

	get Peso () { return this.peso; }
	get TipoComida () { return this.tipoComida; }

	set Peso (peso) { this.peso = peso; }
	set TipoComida (tipoComida) { this.tipoComida = tipoComida; }

	async cadastrarComida () {
		const data = {
			codigo: super.Codigo,
			comida: {
				nome: super.Nome,
				descricao: super.Descricao,
				valorUnitario: super.ValorUnitario,
				dataValidade: super.DataValidade,
				peso: this.peso,
				tipo: this.tipoComida
			}
		};
		console.log(data);
		let dadosCompletos = await this.pegarComidas();
		dadosCompletos.push(data);
		try {
			await localStorage.setItem('Comidas', JSON.stringify(dadosCompletos));
			return `O produto com o codigo ${data.codigo} foi enviado com sucesso`;
		} catch (error) {
			return 'Falha ao cadastrar a comida';
		}
        
	}

	async pegarComidas () {
		try {
			return await JSON.parse(localStorage.getItem('Comidas') || '[]');
		} catch (error) {
			return [];
		}
	}

}
