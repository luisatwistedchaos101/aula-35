const { Usuario } = require("./Usuario");

class UsuarioDono extends Usuario {
  constructor(id, nome, imagem, email, papel) {
    super(id, nome, imagem, email, papel.USUARIO_DONO);
    this.videos = []; // O dono do canal pode gerenciar seus vídeos
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

  // Exemplo: Gerenciar inscritos no canal
  listarInscritos(inscritos) {
    // Lógica
  }
}

module.exports = UsuarioDono;
