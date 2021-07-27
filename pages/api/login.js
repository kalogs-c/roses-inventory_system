import mongoose from "mongoose";

export default function login() {
  const db = mongoose.createConnection("mongodb://localhost:27017/Balur", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    User.find({ login: "killerik", password: "monstrinho55" }, () => {
      mongoose.connection.close();
      console.log("Connected");
      res.status(200);
    });
  });
}
