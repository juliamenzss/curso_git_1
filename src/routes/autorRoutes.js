import express from "express";
import AutorController from "../controllers/autorController.js";


const routes = express.Router();

routes.get("/autores", AutorController.ListarAutores);
routes.get("/autores/:id", AutorController.ListarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor)
routes.delete("/autores/:id", AutorController.excluirAutor);

export default routes;