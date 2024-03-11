import { UserEntity, UserProps } from '../../user.entity'
import { faker } from '@faker-js/faker'

describe('UserEntity unit test', () => {
  let sut: UserEntity
  let props: UserProps

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }

    sut = new UserEntity(props)
  })

  it('Should be defined', () => {
    expect(sut).toBeDefined()
  })

  it('Should return value passed by constructor', () => {
    expect(sut.props.name).toEqual(props.name)
  })

  it('Should return value passed by constructor and filed createAt should return value type Date', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.createAt).toBeInstanceOf(Date)
  })

  it('Should return value passed by constructor and filed updateAt should return value type Date', () => {
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.createAt).toBeInstanceOf(Date)
  })
})
