const express = require("express");
const app = express();

const zeus = {
  "nombre": "Zeus",
  "titulo": "Rey de los dioses del Olimpo",
  "mitologia": "Griega",
  "dominio": [
    "cielo",
    "rayo",
    "trueno",
    "orden",
    "justicia"
  ],
  "simbolos": [
    "rayo",
    "águila",
    "cetro",
    "roble"
  ],
  "familia": {
    "padres": ["Cronos", "Rea"],
    "hermanos": ["Hera", "Poseidón", "Hades", "Deméter", "Hestia"],
    "esposa": "Hera",
    "hijos_destacados": [
      "Atenea",
      "Apolo",
      "Artemisa",
      "Ares",
      "Hermes",
      "Dionisio",
      "Heracles"
    ]
  },
  "descripcion": "Zeus es el dios supremo del Olimpo, gobernante del cielo y portador del rayo. Representa la autoridad, el orden y la justicia divina, aunque también es conocido por su carácter pasional y sus numerosas aventuras."
};

app.get("/API/NINFA", (req, res) => {
  res.json(zeus);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API de Zeus activa");
});
