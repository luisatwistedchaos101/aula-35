const gerarIdUnico = require("../utils/gerarIdUnico");
const { usuarios } = require("../mock/dados.json");
class Usuario {
  constructor(nome, imagem, email, papel) {
    this.id = gerarIdUnico(usuarios);
    this.nome = nome;
    this.imagem = imagem;
    this.email = email;
    this.papel = papel;
    this.inscricoes = [];
  }

  pegarPapel() {
    return this.papel;
  }

  listarInscricoes() {
    return this.inscricoes;
  }

  inscreverSeNoCanal(idCanal) {
    this.inscricoes.push(parseInt(idCanal));
  }
}

module.exports = { Usuario };
