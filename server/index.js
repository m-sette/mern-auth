import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import error from './middleware/error.js';
import notFound from './middleware/notfound.js';
import usersRouter from './router/usersRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/users', usersRouter);

app.use(notFound);
app.use(error);

mongoose
    .connect(process.env.DB_URI)
    .then(() => {
        console.log('Connected to the database');

        app.listen(PORT, () =>
            console.log(`Server listening on http://localhost:${PORT}`)
        );
    })
    .catch((e) => console.error(e));
