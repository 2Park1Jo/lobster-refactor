import { atom } from 'recoil'
import { Message } from '../../interfaces/chat/Message'
import { Workspace } from '../../interfaces/workspace/Workspace'
import { User } from '../../interfaces/user/User'

export const CHAT_ATOM = atom<Message[]>({
  key: 'chatAtom',
  default: [],
})

export const WORKSPACES_ATOM = atom<Workspace[]>({
  key: 'workspacesAtom',
  default: [],
})

export const USERS_ATOM = atom<User[]>({
  key: 'usersAtom',
  default: [],
})
