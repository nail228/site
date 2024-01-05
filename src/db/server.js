const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Router=require('@/router/express.js')

const app = express();

let corsOptions = {
    origin: "http://localhost:8081"
};
app.use('/api',Router)

app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));




app.get("/", (req, res) => {
  res.json({ message: "11" });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});