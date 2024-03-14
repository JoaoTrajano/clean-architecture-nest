import { faker } from '@faker-js/faker'
import { UserProps } from '../../user/user.entity'

type Props = {
  name?: string
  email?: string
  password?: string
}

export const userDataBuilder = (props: Props = {}): UserProps => {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
  }
}
