import express from "express";
import mongoose from "./config/database.js"; 
import userRoutes from "./routes/UserRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

//Configuração da Framework(express)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas
app.use("/", userRoutes);    // Rota Usuário
app.use("/", propertyRoutes);// Rota Propriedade

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
