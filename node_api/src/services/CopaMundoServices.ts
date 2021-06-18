import { getCustomRepository } from 'typeorm'
import { CopaMundoRepository } from '../repositories/CopaMundoRepository'

interface ICopaMundoCreate {
  ano: string;
  sede: string;
  campeao: string
}

interface ICopaMundoShow {
  id: string
}

interface ICopaMundoUpdate {
  id: string
  ano: string;
  sede: string;
  campeao: string
}

class CopaMundoServices {

  async create({ ano, sede, campeao }: ICopaMundoCreate) {

    const copaMundoRepository = getCustomRepository(CopaMundoRepository)


    const copaMundo = copaMundoRepository.create({
      ano,
      sede,
      campeao
    })

    await copaMundoRepository.save(copaMundo)

    return copaMundo
  }

  async index() {
    const copaMundoRepository = getCustomRepository(CopaMundoRepository)

    const copaMundo = await copaMundoRepository.find()

    return copaMundo;
  }

  async show({ id }: ICopaMundoShow) {
    const copaMundoRepository = getCustomRepository(CopaMundoRepository)

    const copaMundo = await copaMundoRepository.findOne({ id })

    if (!copaMundo) {
      throw new Error('World Cup id not found!!')
    }

    return copaMundo;
  }

  async delete({ id }: ICopaMundoShow) {
    const copaMundoRepository = getCustomRepository(CopaMundoRepository)

    const copaMundo = await copaMundoRepository.findOne({ id })

    if (!copaMundo) {
      throw new Error('World Cup id not found!!')
    }

    return await copaMundoRepository.delete({ id })
  }

  async update({ id, ano, sede, campeao }: ICopaMundoUpdate) {
    const copaMundoRepository = getCustomRepository(CopaMundoRepository)

    let copaMundo = await copaMundoRepository.findOne({ id })

    if (!copaMundo) {
      throw new Error('World Cup id not found!!')
    }

    await copaMundoRepository.update(
      id, {
      ano,
      sede,
      campeao
    })

    copaMundo = await copaMundoRepository.findOne({ id })

    return copaMundo

  }
}

export { CopaMundoServices }