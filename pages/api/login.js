import connect from "../../utils/database";
import { compare } from "bcrypt";

export default async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connect();

    const response = await db
      .collection("users")
      .findOne({ login: req.body.login });

    if (!response) return;

    const comparePassword = await compare(req.body.password, response.password);

    if (comparePassword) {
      res.status(200).json({ message: "Success" });
      return;
    }

    res.status(404).json({ message: response });
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};
