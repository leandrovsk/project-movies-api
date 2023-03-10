import express, { Application } from "express";
import { startDatabase } from "./database";
import { createMovie, getMovies, updateMovie, deleteMovie } from "./logic";
import { ensureMovieExists, validateBodyMiddleware } from "./middlewares";

const app: Application = express();
app.use(express.json());

app.post("/movies", validateBodyMiddleware, createMovie);
app.get("/movies", getMovies);
app.patch("/movies/:id", ensureMovieExists, validateBodyMiddleware, updateMovie);
app.delete("/movies/:id", ensureMovieExists, deleteMovie);

app.listen(3000, async () => {
  await startDatabase();
  console.log("Server is running!");
});
