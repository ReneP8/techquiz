import express, { json } from 'express';
import bodyParser from 'body-parser';

import topicRoutes from './routes/topics.js';

const app = express();

app.use(json());
app.use('topics', topicRoutes);

app.listen(3001, () => {
    console.log("Server started.")
})

app.get('/', (req, res) => {
    res.send('It works');
})
