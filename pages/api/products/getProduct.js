import connect from "../../../utils/database";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { cachedDb } = await connect();

    const product = await cachedDb
      .collection("products")
      .findOne({ _id: ObjectId(req.body.id) });
    console.log(`ObjectId("${req.body.id}")`);

    res.status(200).json({ product: product });
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};
