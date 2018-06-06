import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JWT implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      // TODO: SECRET_TOKEN
      process.env.SECRET_TOKEN = process.env.SECRET_TOKEN || 'provideoneatruntime';
      if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
      ) {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, process.env.SECRET_TOKEN, (err, payload) => {
          if (!err) {
            // confirm identity and check user permissions
            req.body = payload.user;
            next();
          } else {
            return res.status(403).json(err);
          }
        });
      } else {
        return res.status(401).json('The access token is not valid.');
      }
    };
  }
}
