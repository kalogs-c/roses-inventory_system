import connect from "../../utils/database";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  if (req.method === "POST") {
    const { cachedDb } = await connect();

    const response = await cachedDb
      .collection("users")
      .findOne({ login: req.body.login });

    if (!response) {
      res.status(404).json({ message: response })
      return
    };

    const TOKEN = await jwt.sign(response, process.env.JWT_KEY, {
      expiresIn: '24h',
    });

    const comparePassword = await compare(req.body.password, response.password);
    if (comparePassword) {
      res.status(200).json({TOKEN});
      return;
    }

    res.status(400).json({ message: "Error" });
  }

  res.status(400).json({ message: "Method not allowed" });
};
