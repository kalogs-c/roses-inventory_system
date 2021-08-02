import jwt from "jsonwebtoken";

export default async function Verify(req, res) {
  try {
    jwt.verify(req.headers.authorization, process.env.JWT_KEY);
    res.status(200).json({ isAuthorized: true });
    return true
  } catch (error) {
    console.log(error);
    res.status(400).json({ isAuthorized: false });
    return false
  }
}
