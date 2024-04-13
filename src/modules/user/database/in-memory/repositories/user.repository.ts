import { UserEntity } from '@/modules/user/domain/entities'
import { UserRepositoryInterfaceInMemory } from '@/modules/user/domain/repositories/user.repository.interface'
import { InMemory } from '@/shared/domain/repositories/in-memory.repository'

export class UserRepositoryInMemory
  extends InMemory<UserEntity>
  implements UserRepositoryInterfaceInMemory
{
  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.items.find(item => item.email === email)
    if (!user) return null
    return user
  }

  async emailExist(email: string): Promise<void> {
    const user = await this.items.find(item => item.email === email)
    if (user) return null
  }
}
