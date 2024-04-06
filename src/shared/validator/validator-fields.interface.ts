export type FieldsError = {
  [field: string]: string[]
}

export interface ValidatorFieldsInterface<PropsValidated> {
  error: FieldsError | null
  validatedData: PropsValidated | null
  validate(data: PropsValidated): boolean
}
