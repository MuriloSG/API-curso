import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateUserUseCase } from './createUserUseCase'
import { instanceToInstance } from 'class-transformer'

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase)
    const { name, email, password, isAdim, roleId } = request.body
    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      isAdim,
      roleId,
    })
    return response.status(201).json(instanceToInstance(user))
  }
}
