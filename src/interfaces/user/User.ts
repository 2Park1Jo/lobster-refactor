import { StatusType } from '@channel.io/bezier-react'

export interface User {
  id: string
  name: string
  email: string
  profileImage: string
  status: StatusType
}

export interface UserList {
  users: User[]
}
