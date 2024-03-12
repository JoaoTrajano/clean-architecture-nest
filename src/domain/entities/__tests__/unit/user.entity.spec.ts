import { UserEntity, UserProps } from '../../user/user.entity'
import { userDataBuilder } from '../helpers/user-data-builder'

describe('UserEntity unit test', () => {
  let sut: UserEntity
  const props: UserProps = userDataBuilder({})

  beforeEach(() => {
    sut = new UserEntity(props)
  })

  it('Should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('Should return value passed by constructor', () => {
    expect(sut.name).toEqual(props.name)
  })

  it('Should return value passed by constructor and filed createAt should return value type Date', () => {
    expect(sut.name).toEqual(props.name)
    expect(sut.createAt).toBeInstanceOf(Date)
  })

  it('Should return value passed by constructor and filed updateAt should return value type Date', () => {
    expect(sut.email).toEqual(props.email)
    expect(sut.createAt).toBeInstanceOf(Date)
  })
})
