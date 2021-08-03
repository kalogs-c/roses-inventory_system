import connect from "../../../utils/database";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { cachedDb } = await connect();
    
    await cachedDb
      .collection("products")
      .deleteOne({ _id: ObjectId(req.body.id) });

    res.status(200).json({ message: "Produto deletado com sucesso" });
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};
