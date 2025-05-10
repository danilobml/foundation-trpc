import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.listen(8080, () => console.log(`Listening on port 8080`))
