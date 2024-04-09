import { FieldsError } from '@/shared/validator/validator-fields.interface'

export class ValidationErros extends Error {}

export class UserValidationErros extends Error {
  constructor(public errors: FieldsError) {
    super('Entity validation error')
    this.name = 'UserValidationErros'
  }
}
