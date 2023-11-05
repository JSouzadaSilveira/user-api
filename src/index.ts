import { MongoGetUsersRepository } from "./repositories/get-users/mongo-get-users";
import express from "express";
import { config } from "dotenv";
import { GetUsersController } from "./controllers/get-users/get-users";

config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/users", async (req, res) => {
  const mongoGetUsersRepository = new MongoGetUsersRepository();
  const getUsersControler = new GetUsersController(mongoGetUsersRepository);

  const { body, statusCode } = await getUsersControler.handle();
  res.send(body).status(statusCode);
});

app.listen(port, () => console.log(`listening on port ${port}!`));
