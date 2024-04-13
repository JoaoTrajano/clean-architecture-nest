import { RespositoryInterface } from '@/shared/domain/repositories/repository-contract'
import { UserEntity } from '../entities'

export interface UserRepositoryInterfaceInMemory
  extends RespositoryInterface<UserEntity> {
  findByEmail(email: string): Promise<UserEntity | null>
  emailExist(email: string): Promise<void>
}
