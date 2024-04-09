import { Entity } from '../entities/entity'

export interface RespositoryInterface<E extends Entity> {
  insert(data: E): Promise<boolean>
  findById(id: string): Promise<E | null>
  findAll(): Promise<E[]>
  update(data: E): Promise<boolean | null>
  delete(id: string): Promise<boolean | null>
}
