import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'
import { ClassValidatorFields } from '../../class-validator-fields'

type StubRolesProps = {
  name: string
  price: number
}

class StubRoles {
  @MaxLength(255)
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNumber()
  @IsNotEmpty()
  price: number

  constructor(data: StubRolesProps) {
    Object.assign(this, data)
  }
}

class StubClassValidator extends ClassValidatorFields<StubRoles> {
  validate(data: StubRoles): boolean {
    return super.validate(data)
  }
}

describe('StubClassValidator integration test', () => {
  it('Should return erros', () => {
    const stub = new StubClassValidator()
    stub.validate(new StubRoles({ name: '', price: 1 }))
    expect(stub.error).toStrictEqual({
      name: ['name should not be empty'],
    })
  })

  it('Should return without erros', () => {
    const stub = new StubClassValidator()
    stub.validate(new StubRoles({ name: 'value', price: 1 }))
    expect(stub.error).toBeNull()

    expect(stub.validatedData).toStrictEqual(
      new StubRoles({ name: 'value', price: 1 }),
    )
  })
})
