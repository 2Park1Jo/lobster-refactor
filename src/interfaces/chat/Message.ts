import { User } from '../../interfaces/user/User'

export interface Message {
  sender: User
  timeStamp: string | Date
  content: string
}
