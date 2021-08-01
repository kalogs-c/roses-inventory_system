import jwt from 'jsonwebtoken'

export default async function Verify(req, res) {
  const verify = jwt.verify(req.headers.Authorization, process.env.JWT_KEY)
  console.log(verify);
}