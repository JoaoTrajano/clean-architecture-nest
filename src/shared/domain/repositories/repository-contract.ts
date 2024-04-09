import { Entity } from '../entities/entity'

export interface RespositoryInterface<E extends Entity> {
  insert(data: E): Promise<boolean>
  findById(id: string): Promise<E>
  findAll(): Promise<E[]>
  update(data: E): Promise<boolean>
  delete(id: string): Promise<boolean>
}
