import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import { ForbiddenError } from '../errors/forbidden.error';
import userRepository from '../repositories/user.repository';


const jwtAuthenticationMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            throw new ForbiddenError({ log: 'Credenciais not found' });
        }

        const [authorizationType, jwtToken] = authorizationHeader.split(' ');

        if (authorizationType !== 'Bearer') {
            throw new ForbiddenError({ log: 'Invalid authorization type' });
        }

        if (!jwtToken) {
            throw new ForbiddenError({ log: 'Invalid token' });
        }

        try {
            const tokenPayload = JWT.verify(jwtToken, 'teste');
            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError({ log: 'Invalid token' });
            }

            const user = await userRepository.findByUuid(tokenPayload.sub);
            req.user = user;
            return next();
        } catch (error) {
            throw new ForbiddenError({ log: 'Invalid token' });
        }
    } catch (error) {
        return next(error);
    }
}

export default jwtAuthenticationMiddleware;