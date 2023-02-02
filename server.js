import express from "express";
import cors from "cors";
import parser from "body-parser";

const app = express();
const port = 3000;

// create application/json parser
var jsonParser = parser.json();

app.use(cors());

app.post("/login", jsonParser, (req, res) => {
  const body = req.body;

  if (!body.username && !body.password) {
    res.status(422).json({ data: "Username and password are not valid" });
  }

  if (!body.username) {
    res.status(422).json({ data: "Username is not valid" });
  }

  if (!body.password) {
    res.status(422).json({ data: "Password is not valid" });
  }

  res.status(200).json({ data: "Ok :)" });
});

app.listen(port, () => {
  console.log(
    `Server is running in the port ${port}, use http protocol to communicate with me`
  );
});
