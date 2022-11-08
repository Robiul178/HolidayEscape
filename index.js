const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json")


app.get('/', (req, res) => {
    res.send('Api running');
});

app.get("/courses", (req, res) => {
    res.send(courses)
});


app.get("/courses/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = courses?.find((p) => p.id == id);
    if (!getSingleItem) {
        res.send('no');
    }
    res.send(getSingleItem);
});


app.listen(port, () => {
    console.log('Server is Working', port);
});