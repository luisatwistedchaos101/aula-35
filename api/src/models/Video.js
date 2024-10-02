class Video {
  constructor(id, titulo, descricao, quantidadeViews, image, canalID) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.quantidadeViews = quantidadeViews;
    this.image = image;
    this.canalID = canalID;
  }

  // Método para exibir informações do vídeo
  exibirInformacoes() {
    // Lógica
  }

  // Método para adicionar uma visualização
  adicionarView() {
    // Lógica
  }

  // Buscar dono desse vídeo
  buscarCanal() {
    // Lógica
  }
}

module.exports = { Video };
