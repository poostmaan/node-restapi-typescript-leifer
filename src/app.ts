import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import "dotenv/config";
import { router } from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));

app.use(router);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
});