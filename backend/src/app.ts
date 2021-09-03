import express from "express";
import path from "path";

const app = express();
const port = process.env.port || 3001;

app.get("/api", (req, res) => {
  res.send("Hello world! This is the API");
});

app.use(express.static(path.join(__dirname, "../../front/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../front/build", "index.html"));
});

app.listen(port, () => console.log(`server is listening on ${port}`));
