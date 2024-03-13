export type FieldsError = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<PropsFields> {
  error: FieldsError
  validatedData: PropsFields
  validate(data: any): boolean
}
