const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

// Habilitar el uso de JSON en las solicitudes
app.use(express.json());

const APP_ID = "";
const APP_KEY = "";

const cacheDatos = {}; // key: ingredient, value: [hit.recipe.label]

app.get("/recipes", async (req, res) => {
  const queryIngredient = req.query.q;
  if (!queryIngredient) {
    return res.status(400).json({ error: "?q=[ingredient] es Requerido" });
  }
  // Buscar si el ingrediente ya ha sido previamente consultado:
  if (cacheDatos[queryIngredient]) {
    return res.json(cacheDatos[queryIngredient]);
  }

  // Extraer datos:
  const url_recipes = `https://api.edamam.com/api/recipes/v2?app_id=${APP_ID}&app_key=${APP_KEY}&q=${queryIngredient}&type=public`;
  try {
    const response = await axios.get(url_recipes);
    if (response.data.hits.length < 1) {
      return res.status(400).json({ error: "No hay coincidencias" });
    }
    const hitsLabel = response.data.hits.map((hit) => hit.recipe.label);
    cacheDatos[queryIngredient] = hitsLabel;
    return res.json(hitsLabel);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// Lista de elementos en memoria
let items = [];

// Ruta GET para listar los elementos
app.get("/items", (req, res) => {
  res.json(items);
});

// Ruta POST para agregar un nuevo elemento a la lista
app.post("/items", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "El nombre del ítem es requerido" });
  }

  items.push(name);
  res.status(201).json({ message: "Item agregado con éxito", items });
});

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
