const gerarIdUnico = require("../utils/gerarIdUnico");
const { videos } = require("../mock/dados.json");

class Video {
  constructor(titulo, descricao, image, canalID) {
    this.id = gerarIdUnico(videos);
    this.titulo = titulo;
    this.descricao = descricao;
    this.quantidadeViews = 0;
    this.image = image;
    this.canalID = canalID;
  }

adicionarView() {
this.quantidadeViews = this.quantidadeViews += 1
}
exibirInformacoes(){
  return this.quantidadeViews;
}

buscarCanal(){
  return this.canalID
}
}

module.exports = Video;
