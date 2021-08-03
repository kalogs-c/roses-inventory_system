import connect from "../../../utils/database";

export default async (req, res) => {
  if (!req.headers.authorization) res.status(400).json({message: "Miss authorization"})

  console.log(req.headers.authorization)
  const { cachedDb } = await connect();
  const userList = [];

  await cachedDb
    .collection("users")
    .find()
    .forEach((item) => userList.push(item));
  res.status(200).json({ users: userList });
};
