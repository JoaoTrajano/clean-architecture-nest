import { ClassValidatorFields } from '@/shared/validator/class-validator-fields'
import { UserProps } from '../domain/entities'
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class UserRoles {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  password: string

  constructor(props: UserProps) {
    Object.assign(this, { ...props })
  }
}

export class UserValidator extends ClassValidatorFields<UserProps> {
  userValidate(data: UserProps): boolean {
    return this.validate(new UserRoles({ ...data }))
  }
}

export class UserValidatorFactory {
  static getValidator(): UserValidator {
    return new UserValidator()
  }
}
