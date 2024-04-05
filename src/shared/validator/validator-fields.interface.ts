export type FieldsError = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  error: FieldsError
  validatedData: PropsValidated
  validate(data: any): boolean
}
