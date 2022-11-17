import { NextFunction, Request, Response } from 'express';
import { validatingToken } from '../helpers/jwtToken';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  next();
};

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const validatedToken = validatingToken(authorization);
    req.headers.userId = validatedToken.payload.id;
    console.log(req.headers.userId);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export { validateLogin, validateToken };
