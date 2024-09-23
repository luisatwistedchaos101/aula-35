// models/UsuarioInscrito.js
const { Usuario } = require("./Usuario");
const UsuarioPapel = require("./UsuarioPapel");

class UsuarioInscrito extends Usuario {
  constructor(id, nome, imagem, email) {
    super(id, nome, imagem, email, UsuarioPapel.USUARIO_INSCRITO);
    this.canaisInscritos = [];
  }

  inscreverSeNoCanal(idCanal) {
    // Lógica
  }

  listarCanaisInscritos() {
    // Lógica
  }
}

module.exports = UsuarioInscrito;
