const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const router = require("./routes/index.routes");

const PORT = config.get("port") || 3030;

const app = express();
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("css"));
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

async function start() {
  try {
    const uri = config.get("dbUri");
    await mongoose.connect(uri);
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
