const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hello",
        app: "Natour"
    });
})

app.post('/', (req, res) => {
    res.send("You can post at endpoint");
})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
})