import { Entity } from '../entities/entity'
import { RespositoryInterface } from './repository-contract'

export abstract class InMemory<E extends Entity>
  implements RespositoryInterface<E>
{
  items: E[] = []

  async insert(data: E): Promise<boolean> {
    this.items.push(data)
    return true
  }

  async findById(id: string): Promise<E | null> {
    return this._get(id)
  }

  async findAll(): Promise<E[]> {
    return this.items
  }

  async update(data: E): Promise<boolean | null> {
    const item = this._get(data.id)
    if (!item) return null

    const index = this.items.findIndex(item => item.id === data.id)
    this.items[index] = data

    return true
  }

  async delete(id: string): Promise<boolean | null> {
    const item = this._get(id)
    if (!item) return null

    this.items = this.items.filter(item => item.id !== id)
    return true
  }

  protected async _get(id: string): Promise<E | null> {
    const item = this.items.find(item => item.id === id)
    return item ? item : null
  }
}
