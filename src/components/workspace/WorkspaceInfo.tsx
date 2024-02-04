import React, { useState } from 'react'
import UserCard from '../user/UserCard'
import {
  DEFAULT_USER,
  OFFLINE_USER,
  OFFLINE_USER2,
  OnlineCrescent_USER,
  OfflineCrescent_USER,
  OFFLINE_USER3,
} from '../../constants/user'

import TooltipButton from '../common/TooltipButton'
import { SectionLabel, ListItem, ButtonSize } from '@channel.io/bezier-react'
import { StarIcon, FaceSmileIcon } from '@channel.io/bezier-icons'
import { CHAT_ROOM } from '../../recoil/atoms'
import { useRecoilState } from 'recoil'
import { ButtonStyleVariant } from '@channel.io/bezier-react'
import { ChevronDownIcon, ChevronRightIcon, PlusIcon } from '@channel.io/bezier-icons'
const WorkspaceInfo: React.FC = () => {
  const [isGroupSectionOpen, setIsGroupSectionOpen] = useState<boolean>(true)
  const [isDirectMessageSectionOpen, setIsDirectMessageSectionOpen] = useState<boolean>(true)
  const [currentChatRoom, setCurrentChatRoom] = useRecoilState(CHAT_ROOM)

  return (
    <div>
      <h1> &nbsp;&nbsp; Workspace Name</h1>
      <div style={{ width: 200 }}>
        <UserCard user={DEFAULT_USER} isMe={true} isEmailHide={true} />

        <SectionLabel
          content="그룹"
          open={isGroupSectionOpen}
          rightContent={[
            <TooltipButton
              tooltipContent={isGroupSectionOpen ? '접기' : '펼치기'}
              buttonContent={isGroupSectionOpen ? ChevronDownIcon : ChevronRightIcon}
              buttonSize={ButtonSize.XS}
              buttonStyleVariant={ButtonStyleVariant.Tertiary}
              onClick={() => {
                setIsGroupSectionOpen(!isGroupSectionOpen)
              }}
            />,
            <TooltipButton
              tooltipContent="그룹에 참여하기"
              buttonContent={PlusIcon}
              buttonSize={ButtonSize.XS}
              buttonStyleVariant={ButtonStyleVariant.Tertiary}
              onClick={() => {}}
            />,
          ]}
        >
          <ListItem
            onClick={() => {
              setCurrentChatRoom('id1')
            }}
            active={currentChatRoom === 'id1' ? true : false} // set unique key by department
            leftIcon={StarIcon}
            content="단체방"
          ></ListItem>
          <ListItem
            onClick={() => {
              setCurrentChatRoom('id2')
            }}
            active={currentChatRoom === 'id2' ? true : false}
            leftIcon={FaceSmileIcon}
            content="공지사항"
          ></ListItem>
        </SectionLabel>

        <SectionLabel
          content="다이렉트 메시지"
          open={isDirectMessageSectionOpen}
          rightContent={[
            <TooltipButton
              tooltipContent={isDirectMessageSectionOpen ? '접기' : '펼치기'}
              buttonContent={isDirectMessageSectionOpen ? ChevronDownIcon : ChevronRightIcon}
              buttonSize={ButtonSize.XS}
              buttonStyleVariant={ButtonStyleVariant.Tertiary}
              onClick={() => {
                setIsDirectMessageSectionOpen(!isDirectMessageSectionOpen)
              }}
            />,
            <TooltipButton
              tooltipContent="새 다이렉트 메시지"
              buttonContent={PlusIcon}
              buttonSize={ButtonSize.XS}
              buttonStyleVariant={ButtonStyleVariant.Tertiary}
              onClick={() => {}}
            />,
          ]}
        >
          <UserCard user={OnlineCrescent_USER} isEmailHide={true} />
          <UserCard user={OfflineCrescent_USER} isEmailHide={true} />
          <UserCard user={OFFLINE_USER} isEmailHide={true} />
          <UserCard user={OFFLINE_USER2} isEmailHide={true} />
          <UserCard user={OFFLINE_USER3} isEmailHide={true} />
        </SectionLabel>
      </div>
    </div>
  )
}

export default WorkspaceInfo
