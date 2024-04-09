import { UserValidatorFactory } from '@/modules/user/validator/user.validator'
import { Entity } from '@/shared/domain/entities/entity'
import { UserValidationErros } from '@/shared/domain/errors/validation-erros'

export type UserProps = {
  name: string
  email: string
  password: string
}

export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps) {
    UserEntity.validate(props)
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

  static validate(data: UserProps) {
    const validator = UserValidatorFactory.getValidator()
    const isValid = validator.userValidate(data)

    if (!isValid) throw new UserValidationErros(validator.error)

    return true
  }
}
