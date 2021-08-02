import connect from "../../../utils/database";

export default async (req, res) => {
  if (req.method === "POST") {
    const { cachedDb } = await connect();

    const data = await cachedDb.collection("users");
    console.log(data);
  }

  res.status(400).json({ message: "Method not allowed" });
};
