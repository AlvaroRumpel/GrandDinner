export default class Produtos {
	constructor (codigo, nome, descricao, valorUnitario, dataValidade) {
		this.codigo = codigo;
		this.nome = nome;
		this.descricao = descricao;
		this.valorUnitario = valorUnitario;
		this.dataValidade = dataValidade;
	}

	get Codigo() { return this.codigo; }
	get Nome() { return this.nome; }
	get Descricao() { return this.descricao; }
	get ValorUnitario() { return this.valorUnitario; }
	get DataValidade() { return this.dataValidade; }

	set Codigo(codigo) { this.codigo = codigo; }
	set Nome(nome) { this.nome = nome;}
	set Descricao(descricao) { this.descricao = descricao;}
	set ValorUnitario(valorUnitario) { this.valorUnitario = valorUnitario;}
	set DataValidade(dataValidade) { this.dataValidade = dataValidade; }

}
