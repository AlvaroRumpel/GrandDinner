(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
	1: [function (require, module, exports) {
		const Produtos = require('./Produtos');

		class Comidas extends Produtos {
			constructor(peso, tipoComida) {
				super();
				this.peso = peso;
				this.tipoComida = tipoComida;
			}

			get Peso() { return this.peso; }
			get TipoComida() { return this.tipoComida; }

			set Peso(peso) { this.peso = peso; }
			set tipoComida(tipoComida) { this.tipoComida = tipoComida; }

			async cadastrarComida() {
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

				let dadosCompletos = this.pegarComidas();
				dadosCompletos.push(data);
				try {
					await localStorage.setItem('Comidas', JSON.stringify(dadosCompletos));
					return `O produto com o codigo ${data.codigo} foi enviado com sucesso`;
				} catch (error) {
					return 'Falha ao cadastrar a comida';
				}

			}

			async pegarComidas() {
				try {
					return await JSON.parse(localStorage.getItem('Comidas') || '[]');
				} catch (error) {
					return null;
				}
			}

		}

		module.exports = Comidas;
	}, { "./Produtos": 2 }], 2: [function (require, module, exports) {
		class Produtos {
			constructor(codigo, nome, descricao, valorUnitario, dataValidade) {
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
			set Nome(nome) { this.nome = nome; }
			set Descricao(descricao) { this.descricao = descricao; }
			set ValorUnitario(valorUnitario) { this.valorUnitario = valorUnitario; }
			set DataValidade(dataValidade) { this.dataValidade = dataValidade; }

		}

		module.exports = Produtos;
	}, {}], 3: [function (require, module, exports) {
		const comidas = require('./Comidas');

		const salvarComida = () => {
			console.log('entrei');

			let codigo = document.querySelector('#codigo').value;
			let nome = document.querySelector('#nome').value;
			let descricao = document.querySelector('#descricao').value;
			let valorUnitario = document.querySelector('#valorUnitario').value;
			let dataValidade = document.querySelector('#dataValidade').value;
			let peso = document.querySelector('#peso').value;
			let tipo = document.querySelector('#tipo').value;

			const novaComida = new comidas(codigo, nome, descricao, valorUnitario, dataValidade, peso, tipo);

			novaComida.cadastrarComida();
			console.log(novaComida.pegarComidas());
		};


	}, { "./Comidas": 1 }]
}, {}, [3]);

