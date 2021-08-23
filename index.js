const express = require("express");
const cors = require("cors");
const mealController = require("./controllers/mealsControllers");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/id/:id", mealController.getMealById);
app.use("/", mealController.getAllMeals);
app.use("/categories", mealController.getAllMealsCategories);
app.use("/filter", mealController.getMealsByCategory);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
