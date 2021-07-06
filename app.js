const express = require("express");
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8080;

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

router.get("/pricing-panel", function (req, res) {
    res.sendFile(path + "index.html");
});

router.get("/to-do", function (req, res) {
    res.sendFile(path + "index.html");
});

router.get("/photosite", function (req, res) {
    res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(port, function() {
    console.log("My App listening on port 8080 !");
});