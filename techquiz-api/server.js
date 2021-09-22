const express = require('express');
const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Server started.")
})

app.get('/', (req, res) => {
    res.send('It works');
})
