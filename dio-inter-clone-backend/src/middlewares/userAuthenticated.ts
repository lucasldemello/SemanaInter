import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../shared/error/AppError';

interface ITokenPayload {
  firstName: string;
  lastName: string;
  iat: number;
  exp: number;
  sub: string;
}

export default function userAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  //validação do token jwt

  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError('Token não informado', 401);

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub, firstName, lastName } = decoded as ITokenPayload;

    req.user = {
      id: sub,
      firstName,
      lastName,
    };

    return next();
  } catch {
    throw new AppError('Token inválido', 401);
  }
}