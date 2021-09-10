import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import DatabaseError from '../models/errors/database.error.model';
import userRepository from '../repositories/user.repository';

const usersRoute = Router();

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send(user);
    } catch (error) {
        next(error);
    }
});

usersRoute.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.create(newUser);
    res.status(StatusCodes.CREATED).send(uuid);
});

usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await userRepository.update(modifiedUser);

    res.status(StatusCodes.OK).send();
});

usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;
