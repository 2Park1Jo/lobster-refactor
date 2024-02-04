import { atom, useRecoilState } from 'recoil'
import { User, UserList } from '../../interfaces/user/User'

export const userListState = atom<UserList>({
  key: 'userListState',
  default: {
    users: [],
  },
})

export const useUserListViewModel = () => {
  const [userList, setUserList] = useRecoilState(userListState)

  const addUser = (user: User) => {
    setUserList((prevList) => ({
      users: [...prevList.users, user],
    }))
  }

  return {
    userList,
    addUser,
  }
}
