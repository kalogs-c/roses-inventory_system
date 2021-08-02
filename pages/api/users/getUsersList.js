import connect from "../../../utils/database";

export default async (req, res) => {
  const { cachedDb } = await connect();
  const userList = [];

  await cachedDb
    .collection("users")
    .find()
    .forEach((item) => userList.push(item));
  res.status(200).json({ users: userList });
};
