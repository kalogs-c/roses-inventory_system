import connect from "../../../utils/database";
import { ObjectId } from "mongodb";

export default async (req, res) => {
  if (req.method === "POST") {
    const { cachedDb } = await connect();

    const sell = await cachedDb
      .collection("sells")
      .findOne({ _id: ObjectId(req.body.id) });

    res.status(200).json({ sell: sell });
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};