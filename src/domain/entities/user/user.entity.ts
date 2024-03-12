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

  set name(value: string) {
    this.props.name = value
  }

  get email(): string {
    return this.props.email
  }

  set email(value: string) {
    this.props.email = value
  }

  get password(): string {
    return this.props.password
  }

  set password(value: string) {
    this.props.password = value
  }
}
