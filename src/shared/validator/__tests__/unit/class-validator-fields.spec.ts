import { ClassValidatorFields } from '../../class-validator-fields'

import * as libClassValidator from 'class-validator'

class StubClassValidator extends ClassValidatorFields<{ field: string }> {}

describe('StubClassValidator unit test', () => {
  it('Should sut defined', () => {
    const sut = new StubClassValidator()

    expect(sut).toBeDefined()
  })

  it('Should return errors and validatedData equal to null', () => {
    const sut = new StubClassValidator()

    expect(sut.error).toBeNull()
    expect(sut.validatedData).toBeNull()
  })

  it('Should return errors and the method validateSync should be called', () => {
    const spyOnValidateSync = jest.spyOn(libClassValidator, 'validateSync')
    spyOnValidateSync.mockReturnValue([
      {
        property: 'field',
        constraints: { isRequired: 'test error' },
      },
    ])

    const sut = new StubClassValidator()

    expect(sut.validate({ field: 'teste' })).toBeFalsy()
    expect(spyOnValidateSync).toHaveBeenCalled()
  })
})
