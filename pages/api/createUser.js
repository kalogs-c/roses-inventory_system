import connect from "../../utils/database";
import { hash } from "bcrypt";

export default async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connect();

    const date = new Date();

    const userExists = await db.collection("users").findOne({ login: req.body.login });
    if (userExists) {
      res
        .status(400)
        .json({ message: "Usuario com esse login já existe" });
      return;
    }

    const response = await db.collection("users").insertOne({
      name: req.body.name,
      lastName: req.body.lastName,
      login: req.body.login,
      password: await hash(req.body.password, 10),
      created: date.toLocaleDateString("BR"),
    });

    res.status(200).json(response);
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};
