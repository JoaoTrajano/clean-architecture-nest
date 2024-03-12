import { Entity } from '../../../shared/domain/entities/entity'

export type UserProps = {
  name: string
  email: string
  password: string
}

export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps) {
    super(props)
  }

  get name(): string {
    return this.props.name
  }

  get email(): string {
    return this.props.name
  }

  get password(): string {
    return this.props.name
  }
}
