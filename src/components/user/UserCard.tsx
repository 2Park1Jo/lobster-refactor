import React, { useState } from 'react'
import { User } from '../../interfaces/user/User'
import { Avatar, ListItem, Badge } from '@channel.io/bezier-react'
import { MeIcon } from '@channel.io/bezier-icons'
import { CHAT_ROOM } from '../../recoil/atoms'
import { useRecoilState } from 'recoil'

interface UserCardProps {
  user: User
  isMe?: boolean
  isEmailHide?: boolean
}

const UserCard: React.FC<UserCardProps> = (props) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  const [currentChatRoom, setCurrentChatRoom] = useRecoilState(CHAT_ROOM)

  return (
    <ListItem
      onClick={() => {
        setCurrentChatRoom(props.user.id)
      }}
      active={currentChatRoom === props.user.id ? true : false}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      leftContent={<Avatar name={props.user.name} avatarUrl={props.user.profileImage} status={props.user.status} />}
      content={props.user.name}
      rightContent={props.isMe ? <Badge icon={MeIcon} /> : props.isEmailHide ? '' : isHover && props.user.email}
    />
  )
}

export default UserCard
