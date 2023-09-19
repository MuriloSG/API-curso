import { AppError } from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import jwtConfig from '@config/auth'
import { Secret, verify } from 'jsonwebtoken'

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
    verify(token, jwtConfig.jwt.secret as Secret)
    next()
  } catch {
    throw new AppError('Invalid authentication token', 401)
  }
}
