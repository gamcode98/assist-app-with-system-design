import { User } from '../interfaces/User'

export type Login = Pick<User, 'email' | 'password' >
