import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));

app.listen(() => {
    console.log("running")
}, port);