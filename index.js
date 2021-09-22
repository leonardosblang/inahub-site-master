const express = require("express");
const app = express();
var path = require('path')
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.listen(port, () => console.log(`Example app listening on port port!`));

