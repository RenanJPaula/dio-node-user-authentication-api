
import { NextFunction, Request, Response, Router } from "express";
import { StatusCodes } from 'http-status-codes';
import JWT from 'jsonwebtoken';
import basicAuthMiddleware from "../middlewares/basic-authentication.middleware";

const route = Router();

// “iss” O domínio da aplicação geradora do token
// “sub” É o assunto do token, mas é muito utilizado para guarda o ID do usuário
// “aud” Define quem pode usar o token
// “exp” Data para expiração do token
// “nbf” Define uma data para qual o token não pode ser aceito antes dela
// “iat” Data de criação do token
// “jti” O id do token

route.post('/token', basicAuthMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = JWT.sign({}, 'teste', {
            audience: 'consumer-uuid or api key',
            subject: req.user?.uuid
        });
    
        return res.status(StatusCodes.OK).json({ token });
    } catch (error) {
        next(error);
    }
});

export default route;
