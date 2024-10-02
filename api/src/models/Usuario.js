const UsuarioPapel = require("./UsuarioPapel");

class Usuario {
  constructor(id, nome, imagem, email, papel) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.email = email;
    this.papel = this.verificarPapel(papel);
    this.inscricoes = [];
  }

  verificarPapel(papel) {
    if (!Object.values(UsuarioPapel).includes(papel)) {
      throw new Error(`Papel inválido: ${papel}`);
    } else {
      return papel;
    }
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
