const { videos } = require("../mock/dados.json");

class videosService {
    encontrarTodos() {
        return videos;
    }
  
    buscarPeloId(id) {
        return videos.find((v) => v.id === id);
    }
  
    adicionar(video) { 
        const video = videos.find((v) => v.id === id);}
  

    atualizar(id, videoAtualizado) {
        { const video = this.buscarPeloId(id);
    
            video.titulo = videoAtualizado.titulo;
            video.descricao = videoAtualizado.descricao;
            video.quantidadeViews = videos.quantidadeViews;
            video.canalID = video.canalID;
    
            return video;
        }
    }
  
    excluir(id) {
        
    }
}

module.exports = new videosService ();