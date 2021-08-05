import connect from "../../../utils/database";
import { ObjectId, Decimal128, Int32 } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { cachedDb } = await connect();
    const date = new Date();

    const productExists = await cachedDb
      .collection("products")
      .findOne({ _id: ObjectId(req.body.productId) });

    if (productExists) {
      const update = await cachedDb.collection("products").updateOne(
        { _id: ObjectId(req.body.productId) },
        {
          $set: {
            name: productExists.name,
            price: productExists.price,
            quantity: productExists.quantity - Int32(req.body.quantity),
            created: productExists.created,
            createdBy: productExists.createdBy,
          },
        }
      );

      if (update) {
        await cachedDb.collection("sells").insertOne({
          name: req.body.name,
          value: Decimal128(req.body.value),
          quantity: Int32(req.body.quantity),
          created: date.toLocaleDateString("BR"),
          createdBy: req.body.createdBy,
        });
      }
    }

    res.status(200).json({ message: "Venda criada com sucesso" });
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};
