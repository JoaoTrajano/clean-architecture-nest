import { validateSync } from 'class-validator'
import {
  FieldsError,
  ValidatorFieldsInterface,
} from './validator-fields.interface'

export class ClassValidatorFields<PropsFields>
  implements ValidatorFieldsInterface<PropsFields>
{
  error: FieldsError
  validatedData: PropsFields

  validate(data: any): boolean {
    if (!data) return false
    const errors = validateSync(data)

    if (errors.length) {
      for (const error of errors) {
        this.error[error.property] = Object.values(error.constraints)
        return false
      }
    }

    this.validatedData = data
    return true
  }
}
