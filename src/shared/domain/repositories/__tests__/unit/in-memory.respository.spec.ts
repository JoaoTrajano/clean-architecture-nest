import { Entity } from '@/shared/domain/entities/entity'
import { InMemory } from '../../in-memory.repository'

type SoutEntityProps = {
  name: string
  price: number
}
class SoutEntity extends Entity<SoutEntityProps> {}
class SutInMemoryRepository extends InMemory<SoutEntity> {}

describe('SutInMemoryRepository unit test', () => {
  let sut: SutInMemoryRepository

  beforeEach(() => {
    sut = new SutInMemoryRepository()
  })

  it('Should insert a new entity', async () => {
    const entity = new SoutEntity({ name: 'test', price: 0 })
    await sut.insert(entity)
    expect(sut.items.length > 0).toBeTruthy()
  })

  it('Should return an entity by id', async () => {
    const newEntity = new SoutEntity({ name: 'test 2', price: 1 })
    await sut.insert(newEntity)

    const entity = await sut.findById(newEntity.id)

    expect(entity?.id).toStrictEqual(newEntity.id)
  })
})
