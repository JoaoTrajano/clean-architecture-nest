import { v4 as uuidV4 } from 'uuid'

export abstract class Entity<Props = any> {
  public readonly id: string
  public readonly props: Props
  public createAt: Date
  public updateAt: Date

  constructor(props: Props) {
    this.id = uuidV4()
    this.props = props
    this.createAt = new Date()
    this.updateAt = new Date()
  }
}
