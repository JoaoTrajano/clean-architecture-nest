import { UserEntity } from '../../user/user.entity'
import { userDataBuilder } from '../helpers/user-data-builder'

describe('UserEntity unit test', () => {
  let sut: UserEntity
  const props = userDataBuilder({})

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

  it('Should return name passed by methode Setter', () => {
    sut.name = 'other name'
    expect(sut.name).toEqual('other name')
  })

  it('Should return email passed by methode Setter', () => {
    sut.email = 'other.email@gmail.com'
    expect(sut.email).toEqual('other.email@gmail.com')
  })

  it('Should return password passed by methode Setter', () => {
    sut.password = '123'
    expect(sut.password).toEqual('123')
  })
})
