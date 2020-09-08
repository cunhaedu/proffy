import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' })
  }

  const [scheme, token] = authHeader.split(' ')

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token malformated' })
  }

  try {
    jwt.verify(token, String(process.env.APP_SECRET))
    return next()
  } catch (error) {
    return res.status(401).send({ error: 'Token invalid' })
  }
}
