import connect from "../../../utils/database";
import { Decimal128, Int32 } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { cachedDb } = await connect();
    const date = new Date();

    await cachedDb.collection("products").insertOne({
      name: req.body.name,
      price: Decimal128(req.body.price),
      quantity: Int32(req.body.quantity),
      created: date.toLocaleDateString("BR"),
      createdBy: req.body.createdBy,
    });

    res.status(200).json({ message: "Produto criado com sucesso" });
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};
