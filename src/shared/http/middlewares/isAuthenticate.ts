import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import jwtConfig from '@config/auth'
import { Secret, verify } from 'jsonwebtoken'

type JetPayloadProps = {
  sub: string
}
export const isAuthenticate = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new AppError('Failed to verify access tokeb', 401)
  }
  const token = authHeader.replace('Bearer ', '')
  try {
    const decodedToken = verify(token, jwtConfig.jwt.secret as Secret)
    const { sub } = decodedToken as JetPayloadProps
    request.user = { id: sub }
    next()
  } catch {
    throw new AppError('Invalid authentication token', 401)
  }
}
