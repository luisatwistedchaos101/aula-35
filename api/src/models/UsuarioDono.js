const { Usuario } = require("./Usuario");
const UsuarioPapel = require("./UsuarioPapel");

class UsuarioDono extends Usuario {
  constructor(id, nome, imagem, email) {
    super(id, nome, imagem, email, UsuarioPapel.USUARIO_DONO);
    this.videos = [];
  }

  // Adicionar um novo vídeo
  adicionarVideo(video) {
    // Lógica
  }

  // Remover um vídeo por ID
  removerVideo(idVideo) {
    // Lógica
  }

  // Editar um vídeo por ID
  editarVideo(idVideo, novoTitulo, novaDescricao) {
    // Lógica
  }

  // Listar todos os vídeos do canal
  listarVideos() {
    // Lógica
  }

  //Gerenciar inscritos no canal
  listarInscritos(inscritos) {
    // Lógica
  }
}

module.exports = UsuarioDono;
