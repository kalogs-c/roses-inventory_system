import connect from "../../../utils/database";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  if (!req.headers.authorization)
    res.status(400).json({ message: "Miss authorization" });
  try {
    jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    const { cachedDb } = await connect();
    const userList = [];

    await cachedDb
      .collection("users")
      .find()
      .forEach((item) => userList.push(item));
    res.status(200).json({ users: userList });
    return true;
  } catch (error) {
    console.log(error);
    res.status(400).json({ isAuthorized: false });
    return false;
  }
};
