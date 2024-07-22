const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("sss");
});

app.listen(PORT, () => console.log(`Listening on - https://localhost${PORT}`));
