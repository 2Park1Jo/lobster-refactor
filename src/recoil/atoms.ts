import { atom } from 'recoil'

export const CHAT_ROOM = atom<string>({
  key: 'chatRoom',
  default: '',
})
