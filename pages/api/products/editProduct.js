import connect from "../../../utils/database";
import { ObjectId, Decimal128, Int32 } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { cachedDb } = await connect();
    const date = new Date();

    const productExists = await cachedDb
      .collection("products")
      .findOne({ _id: ObjectId(req.body.id) });

    if (productExists) {
      await cachedDb.collection("products").updateOne(
        { _id: ObjectId(req.body.id) },
        {
          $set: {
            name: req.body.name ? req.body.name : productExists.name,
            price: req.body.price ? Decimal128(req.body.price) : productExists.price,
            quantity: req.body.quantity
              ? Int32(req.body.quantity)
              : productExists.quantity,
            created: date.toLocaleDateString("BR"),
            createdBy: req.body.createdBy,
          },
        }
      );
    }

    res.status(200).json({ message: "Usuario criado com sucesso" });
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};
