import React from 'react'
import userProfileStyles from '../../styles/user/userProfile.module.scss'
import { User } from '../../interfaces/user/User'
import TooltipButton from '../common/TooltipButton'
import { Avatar, AvatarSize, ButtonGroup, Text, Typography } from '@channel.io/bezier-react'
import { SendIcon, InfoIcon } from '@channel.io/bezier-icons'

interface UserMiniProfileProps {
  user: User
}

const UserMiniProfile: React.FC<UserMiniProfileProps> = (props) => {
  return (
    <div className={userProfileStyles.container}>
      <Avatar
        name={props.user.name}
        size={AvatarSize.Size90}
        status={props.user.status}
        avatarUrl={props.user.profileImage}
      />
      <Text bold typo={Typography.Size18} marginAll={5}>
        {props.user.name}
      </Text>
      <ButtonGroup>
        <TooltipButton
          tooltipContent="다이렉트 메세지"
          buttonContent={SendIcon}
          onClick={() => {
            console.log('click send button')
          }}
        />
        <TooltipButton
          tooltipContent="전체 프로필"
          buttonContent={InfoIcon}
          onClick={() => {
            console.log('click info button')
          }}
        />
      </ButtonGroup>
    </div>
  )
}

export default UserMiniProfile
