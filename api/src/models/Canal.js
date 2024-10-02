const { Usuario } = require("./Usuario");
const UsuarioPapel = require("./UsuarioPapel");

class Canal extends Usuario {
  constructor(id, nome, imagem, email, papel) {
    super(id, nome, imagem, email, papel);
    this.videos = [];
    this.inscritos = [];
  }

  // Adicionar um novo vídeo
  static postarVideo(video) {
    const novoVideo = new VideoColorSpace(video);
    this.videos.push(video);
    return novoVideo;
  }

  // Editar um vídeo por ID
  editarVideo(idVideo, corpo) {
    this.videos.find((video) => video.id == idVideo);

    video.nome = corpo.nome;
    video.imagem = corpo.imagem;
    video.email = corpo.email;
    return video;
  }

  // Remover um vídeo por ID
  excluirVideo(idVideo) {
    const index = this.videos.findIndex((video) => video.id == id);

     return this.videos.splice(index, 1);


  }

  //Gerenciar inscritos no canal
  listarInscritos() {
  return this.inscritos;
  }
}

module.exports = { Canal };
