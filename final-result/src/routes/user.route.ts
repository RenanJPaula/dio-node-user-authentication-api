import { User } from '../models/user.model';
import userRepository from '../repositories/user.repository';
import { Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';

const route = Router();

route.get('/:uuid', async (req: Request<{ uuid: string }>, res: Response) => {
    const uuid = req.params.uuid;
    const user: User = await userRepository.findByUuid(uuid);
    res.status(StatusCodes.OK).json(user);
});

route.post('/', async (req: Request, res: Response) => {
    const user: User = req.body;
    const uuid = await userRepository.create(user);
    res.status(StatusCodes.OK).json({ uuid });
});

route.put('/:uuid', async (req: Request<{ uuid: string }>, res: Response) => {
    const uuid = req.params.uuid;
    const user: User = req.body;
    user.uuid = uuid;
    const updatedUser = await userRepository.update(user);
    res.status(StatusCodes.OK).json(updatedUser);
});

route.delete('/:uuid', async (req: Request<{ uuid: string }>, res: Response) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
});

export default route;
