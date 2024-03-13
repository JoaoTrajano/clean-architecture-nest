import { validateSync } from 'class-validator'
import {
  FieldsError,
  ValidatorFieldsInterface,
} from './validator-fields.interface'

export class ClassValidatorFields<PropsFields>
  implements ValidatorFieldsInterface<PropsFields>
{
  error: FieldsError = null
  validatedData: PropsFields = null

  validate(data: any): boolean {
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
