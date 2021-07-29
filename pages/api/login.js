import connect from "../../utils/database";

export default async (req, res) => {
  if (req.method === "POST") {
    const { db } = await connect();

    const response = await db.collection("users").findOne({
      $and: [{ login: req.body.login }, { password: req.body.password }],
    });

    if (response) {
      res.status(200).json({ message: "Success" });
      return;
    }

    res.status(404).json({ message: response });
    return;
  }

  res.status(400).json({ message: "Method not allowed" });
};
