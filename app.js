const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const connectToDatabase = require("./database/connect");
// const cors = require("./middlewares/cors");
const apiRouter = require("./routes/api");
const pagesRouter = require("./routes/pages");

const app = express();

connectToDatabase();
const PORT = 3001;
app.use(
  // cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT);
