import mongoose from "mongoose";
import userSchema from "userSchema";

mongoose.connect("mongodb://localhost:27017/Balur", {
  useNewUrlParser: true,
});
const db = mongoose.connection;

export default function createUser(req, res) {
  db.on("error", console.error.bind(console, "Error"));
  db.once("open", () => {
    console.log("Connect");
    const User = mongoose.model("usersCamp", userSchema, "users");
    const newUser = new User({
      name: req.body.login,
      lastName: req.body.password,
      login: req.body.login,
      password: req.body.password,
    });
    newUser.save();
  });
}
