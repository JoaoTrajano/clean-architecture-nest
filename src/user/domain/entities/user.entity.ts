export type UserProps = {
  name: string
  email: string
  password: string
  createAt?: Date
  updateAt?: Date
}

export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.createAt = this.props.createAt ?? new Date()
    this.props.updateAt = this.props.updateAt ?? new Date()
  }
}
