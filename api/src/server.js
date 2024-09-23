const express = require("express");
const servidor = express();

const rotas = require("./utils/rotas.json")

const videosRoutes = require("./routes/videosRoutes");
const usuarioInscritoRoutes = require("./routes/usuarioInscritoRoutes");
const usuarioDonoRoutes = require("./routes/usuarioDonoRoutes");

// Middleware para permitir requisições JSON
servidor.use(express.json());

// Usando as rotas
servidor.use("/videos", videosRoutes);
servidor.use("/usuarioDono", usuarioDonoRoutes);
servidor.use("/usuarioInscrito", usuarioInscritoRoutes);

servidor.get("/", (req, res) => res.json(rotas));

// Inicializando o servidor na porta 3000
servidor.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
