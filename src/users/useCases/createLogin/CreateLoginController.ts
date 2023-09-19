import { container } from 'tsyringe'
import { CreateLoginUseCase } from './CreateLoginUseCase'
import { Request, Response } from 'express'
import { instanceToInstance } from 'class-transformer'

export class CreateLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createloginUseCase = container.resolve(CreateLoginUseCase)
    const { email, password } = request.body
    const { user, token } = await createloginUseCase.execute({
      email,
      password,
    })
    return response.status(201).json(
      instanceToInstance({
        user,
        token,
      }),
    )
  }
}
