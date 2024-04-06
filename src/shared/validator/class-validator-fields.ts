import { validateSync } from 'class-validator'
import {
  FieldsError,
  ValidatorFieldsInterface,
} from './validator-fields.interface'

export abstract class ClassValidatorFields<PropsValidated>
  implements ValidatorFieldsInterface<PropsValidated>
{
  error: FieldsError = null
  validatedData: PropsValidated = null

  validate(data: any): boolean {
    const errors = validateSync(data)

    if (errors.length) {
      this.error = {}
      for (const error of errors) {
        this.error[error.property] = Object.values(error.constraints)
        return false
      }
    }

    this.validatedData = data
    return true
  }
}
