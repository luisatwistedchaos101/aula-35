const UsuarioPapel = require("./UsuarioPapel");

class Usuario {
  constructor(id, nome, imagem, email, papel) {
    this.id = id;
    this.nome = nome;
    this.imagem = imagem;
    this.email = email;
    
    if (!Object.values(UsuarioPapel).includes(papel)) {
      throw new Error(`Papel inválido: ${papel}`);
    }
    this.papel = papel;
  }

  pegarPapel() {
    return this.papel;
  }
}

module.exports = { Usuario };
