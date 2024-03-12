import { v4 as uuidV4 } from 'uuid'

export abstract class Entity<Props = any> {
  public readonly _id: string
  public readonly props: Props
  public createAt: Date
  public updateAt: Date

  constructor(props: Props) {
    this._id = uuidV4()
    this.props = props
    this.createAt = new Date()
    this.updateAt = new Date()
  }

  get id(): string {
    return this.id
  }
}
