import { ClassValidatorFields } from '@/shared/validator/class-validator-fields'
import { UserProps } from '../domain/entities'

export class UserRoles {
  name: string
  email: string
  password: string

  constructor(props: UserProps) {
    Object.assign(this, { ...props })
  }
}

export class UserValidator extends ClassValidatorFields<UserProps> {
  validate(data: UserProps): boolean {
    return this.validate(new UserRoles({ ...data }))
  }
}

export class UserValidatorFactory {
  static getValidator(): UserValidator {
    return new UserValidator()
  }
}
