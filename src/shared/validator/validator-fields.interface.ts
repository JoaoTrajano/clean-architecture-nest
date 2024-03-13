export type ErrorValidate = {
  [field: string]: string[]
}

export interface ValidateFieldInterface<PropsFields> {
  error: ErrorValidate
  validatedFieldsData: PropsFields
  validate(data: any): boolean
}
