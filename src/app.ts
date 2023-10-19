import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { router } from './routes';
import dbConnect from './config/mongo';
import helmet from 'helmet';
import compression from 'compression';
import logger from './utilities/logger';
import { loadErrorHandling } from './utilities/errorHandling';

const app = express();

// app.use(compression({
//     threshold: 0, // Comprimir todas las respuestas, independientemente del tamaño
//     filter: (req, res) => {
//       return /json|text|javascript|css/.test(<string>res.getHeader('Content-Type'));
//     },
//     level: 0, // Nivel de compresión (0-9)
//   })) // Compress HTTP body responses 

app.use(compression());
app.use(helmet()); // Helmet provides HTTP headers in the response for app security
app.use(cors()); // Cors is a control to manage the access from clients to APIs
app.use(morgan('dev')); // morgan is log triggered by API consuming
app.use(express.json())
dbConnect();
app.use(router);

loadErrorHandling(app);

// logger.info("bad")
// logger.error("hay jueputa")

export default app;