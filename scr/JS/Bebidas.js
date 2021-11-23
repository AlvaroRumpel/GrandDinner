import Produtos from './Produtos.js';

export default class Bebidas extends Produtos {
	constructor (codigo, nome, descricao, valorUnitario, dataValidade, litros, tipoBebida) {
		super(codigo, nome, descricao, valorUnitario, dataValidade);
		this.litros = litros;
		this.tipoBebida = tipoBebida;
	}

	get Litros () { return this.litros; }
	get TipoBebida () { return this.tipoBebida; }

	set Litros (litros) { this.litros = litros; }
	set TipoBebida (tipoBebida) { this.tipoBebida = tipoBebida; }

	async cadastrarBebidas () {
		const data = {
			codigo: super.Codigo,
			bebidas: {
				nome: super.Nome,
				descricao: super.Descricao,
				valorUnitario: super.ValorUnitario,
				dataValidade: super.DataValidade,
				litros: this.litros,
				tipo: this.tipoBebidas
			}
		};

		let dadosCompletos = await this.pegarBebidas();
		dadosCompletos.push(data);
		try {
			await localStorage.setItem('Bebidas', JSON.stringify(dadosCompletos));
			return `O produto com o codigo ${data.codigo} foi enviado com sucesso`;
		} catch (error) {
			return 'Falha ao cadastrar a Bebidas';
		}
        
	}

	async pegarBebidas () {
		try {
			return await JSON.parse(localStorage.getItem('Bebidas') || '[]');
		} catch (error) {
			return [];
		}
	}
}
