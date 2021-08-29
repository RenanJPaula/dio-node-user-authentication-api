import express, { Request, Response } from 'express';
import errorHanddlerMiddleware from './middlewares/error-handdles.middleware';
import authenticationRoute from './routes/authentication.route';
import userRoute from './routes/user.route';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoute);
app.use('/authentication', authenticationRoute);

app.use(errorHanddlerMiddleware);

app.use('/', (req: Request, res: Response) => {
    res.json({ message: 'ok' });
});

app.listen(3000, () => {
    console.log('listem on 3000!');
});
