const gerarIdUnico = require("../utils/gerarIdUnico");
const dados = require("../mock/dados.json");

class Video {
  constructor(titulo, descricao, image, canalID) {
    this.id = gerarIdUnico(dados.videos);
    this.titulo = titulo;
    this.descricao = descricao;
    this.quantidadeViews = 0;
    this.image = image;
    this.canalID = canalID;
  }

  encontrarTodos() {}
  
  buscarPeloId(id) {}

  adicionar() {}
  
  atualizar(id, videoAtualizado) {}

  excluir(id) {}
}

module.exports = Video;
