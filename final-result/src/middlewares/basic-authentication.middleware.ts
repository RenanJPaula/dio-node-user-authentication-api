import { NextFunction, Request, Response } from 'express';
import { ForbiddenError } from '../errors/forbidden.error';
import userRepository from '../repositories/user.repository';

const basicAuthMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return next(new ForbiddenError({ log: 'Credenciais not found' }));
    }

    const [authorizationType, base64Token] = authorizationHeader.split(' ');

    if (authorizationType !== 'Basic') {
        return next(new ForbiddenError({ log: 'Invalid authorization type' }));
    }

    const [username, password] = Buffer.from(base64Token, 'base64').toString('utf-8').split(':');

    if (!username || !password) {
        return next(new ForbiddenError({ log: 'Credenciais not found' }));
    }

    const user = await userRepository.findByUsernameAndPassword(username, password);

    if (!user) {
        return next(new ForbiddenError({ log: 'Invalid credentials' }));
    }

    req.user = user;
    next();
}

export default basicAuthMiddleware;

