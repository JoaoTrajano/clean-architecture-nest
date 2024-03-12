import { UserProps } from '@/domain/entities/user/user.entity'
import { faker } from '@faker-js/faker'

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
