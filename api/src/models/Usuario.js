const UsuarioPapel = require("./UsuarioPapel");

class Usuario {
  constructor(id, nome, imagem, email, papel) {
    this.id = id;
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
