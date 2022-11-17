import { JwtPayload, Secret, sign, SignOptions, verify } from 'jsonwebtoken';

const { JWT_SECRET } = process.env;
console.log(JWT_SECRET);

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const jwtSecret: Secret = JWT_SECRET as Secret;

const createToken = (user: any): string => {
  const payload = user;
  const token = sign({ payload }, jwtSecret, jwtConfig as SignOptions);
  return token;
};

const validatingToken = (token: string) => {
  const tokenValidated = verify(token, jwtSecret);
  return tokenValidated as JwtPayload;
};

export { createToken, validatingToken };
