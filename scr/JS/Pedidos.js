class Pedidos {
	constructor (numeroPedido, mesa, comidas, quantidadeComidas, bebidas, quantidadeBebidas) {
		this.numeroPedido = numeroPedido;
		this.mesa = mesa;
		this.comidas = comidas;
		this.quantidadeComidas = quantidadeComidas;
		this.bebidas = bebidas;
		this.quantidadeBebidas = quantidadeBebidas;
		this.valorGeral = 0;
	}

	async cadastrarPedido () {
		const data = {
			numeroPedido: this.numeroPedido,
			pedido: {
				mesa: this.mesa,
				descricao: super.Descricao,
				comidas = this.comidas,
				quantidadeComidas = this.quantidadeComidas,
				bebidas = this.bebidas,
				qauntidadeBebidas = this.quantidadeBebidas,
				valorGeral = this.valorGeral,
			}
		};

		let dadosCompletos = this.pegarPedido();
		dadosCompletos.push(data);
		try {
			await localStorage.setItem('Pedido', JSON.stringify(dadosCompletos));
			return `O produto com o codigo ${data.codigo} foi enviado com sucesso`;
		} catch (error) {
			return 'Falha ao cadastrar a comida';
		}
        
	}

	async pegarPedido () {
		try {
			return await JSON.parse(localStorage.getItem('Pedido') || '[]');
		} catch (error) {
			return [];
		}
	}

}

module.exports = Pedidos;