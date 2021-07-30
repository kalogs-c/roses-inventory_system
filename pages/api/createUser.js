import connect from "../../utils/database";

export default async (req, res) => {
  if(req.method === 'POST') {
    const { db } = await connect();

    const date = new Date
    const response = await db.collection("users").insertOne({
      name: req.body.name,
      lastName: req.body.lastName,
      login: req.body.login,
      password: req.body.password,
      created: data.toLocaleDateString("BR")
    });
  
    res.status(200).json(response);
    return
  }

  res.status(400).json({ message: 'Method not allowed'})
};
