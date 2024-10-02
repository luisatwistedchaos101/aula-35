const { Usuario } = require("./Usuario");
const UsuarioPapel = require("./UsuarioPapel");

class Canal extends Usuario {
  constructor(id, nome, imagem, email) {
    super(id, nome, imagem, email, UsuarioPapel.USUARIO_DONO);
    this.videos = [];
  }

  // Adicionar um novo vídeo
  postarVideo(video) {
    // Lógica
  }

  // Editar um vídeo por ID
  editarVideo(idVideo, corpo) {
    // Lógica
  }

  // Remover um vídeo por ID
  excluirVideo(idVideo) {
    // Lógica
  }

  //Gerenciar inscritos no canal
  listarInscritos() {
    // Lógica
  }
}

module.exports = { Canal };
