const express = require("express");
const app = express();

app.use(express.static("public"));

const zeus = {
  nombre: "Zeus",
  titulo: "Rey de los dioses del Olimpo",
  mitologia: "Griega",
  dominio: ["cielo", "rayo", "trueno", "orden", "justicia"],
  simbolos: ["rayo", "águila", "cetro", "roble"],
  familia: {
    padres: ["Cronos", "Rea"],
    hermanos: ["Hera", "Poseidón", "Hades", "Deméter", "Hestia"],
    esposa: "Hera",
    hijos_destacados: [
      "Atenea",
      "Apolo",
      "Artemisa",
      "Ares",
      "Hermes",
      "Dionisio",
      "Heracles"
    ]
  },
  descripcion:
    "Zeus es el dios supremo del Olimpo, gobernante del cielo y portador del rayo."
};

app.get("/API/NINFA", (req, res) => {
  res.json(zeus);
});

// Render inyecta el puerto aquí
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`);
});
