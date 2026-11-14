const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Permite que el frontend (otro dominio) consuma esta API
app.use(cors());

app.get("/test", (req, res) => {
  res.status(200).json({
    success: true,
    status: 200,
    message: "API funcionando correctamente",
    data: {
      estudiante: "Claudia Tax",   // <-- CAMBIAR por tu nombre
      carne: "23470",                  // <-- CAMBIAR por tu carné
      curso: "Despliegue web",
      campus: "UVG Campus Altiplano",
      tecnologia: "Node.js + Express",
      plataforma: "Render",
    },
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`API escuchando en el puerto ${PORT}`);
});
