import { Request, response, Response } from 'express'
import { CopaMundoServices } from '../services/CopaMundoServices'

class CopaMundoController {

  async create(request: Request, response: Response) {
    const { ano, sede, campeao } = request.body

    const copaMundoServices = new CopaMundoServices()

    try {
      const copaMundo = await copaMundoServices.create({ ano, sede, campeao })
      return response.json(copaMundo)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const copaMundoServices = new CopaMundoServices()

    try {
      const copaMundo = await copaMundoServices.index()
      return response.json(copaMundo)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const copaMundoServices = new CopaMundoServices()
    const { id } = request.params

    try {
      const copaMundo = await copaMundoServices.show({ id })
      return response.json(copaMundo)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const copaMundoServices = new CopaMundoServices()
    const { id } = request.params

    try {
      await copaMundoServices.delete({ id })
      return response.json({ message: 'World Cup id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const { ano, sede, campeao } = request.body
    const { id } = request.params

    const copaMundoServices = new CopaMundoServices()

    try {
      const copaMundo = await copaMundoServices.update({ id, ano, sede, campeao})
      return response.json(copaMundo)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { CopaMundoController }

