import { Repository, EntityRepository } from 'typeorm'
import { CopaMundo } from '../entities/CopaMundo'

@EntityRepository(CopaMundo)
class CopaMundoRepository extends Repository<CopaMundo> {

}

export { CopaMundoRepository }

