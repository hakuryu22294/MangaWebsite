import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import router from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

const { PORT, DB_PASSWORD } = process.env;

mongoose
  .connect(
    `mongodb+srv://bookstore:${DB_PASSWORD}@cluster0.uckgfnr.mongodb.net/bookstore?retryWrites=true&w=majority`
  )
  .then(() => console.log(`DB conection`))
  .catch((err) => console.error(err));
app.use("/api", router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
