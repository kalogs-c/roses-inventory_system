import connect from "../../utils/database";

export default async (req, res) => {
  if(req.method === 'POST') {
    const { db } = await connect();
  
    const response = await db.collection("users").insertOne({
      name: "Carlos",
      lastName: "Henrique",
      login: req.body.login,
      password: req.body.password,
      created: Date.now
    });
  
    res.status(200).json(response);
    return
  }

  res.status(400).json({ message: 'Method not allowed'})
};
