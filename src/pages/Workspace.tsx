import React, { useState } from 'react'
import workspaceLayoutStyles from '../styles/workspace/workspaceLayout.module.scss'
import LeftStack from '../components/workspace/LeftNavBar'
import WorkspaceInfo from '../components/workspace/WorkspaceInfo'
import UserMiniProfile from '../components/user/UserMiniProfile'
import MessageEditor from '../components/chat/editor/MessageEditor'
import ChatView from '../components/chat/message/ChatView'
import { SectionLabel } from '@channel.io/bezier-react'
import TooltipButton from '../components/common/TooltipButton'
import { ChevronDownIcon, ChevronRightIcon, PersonFilledIcon } from '@channel.io/bezier-icons'
import { ButtonSize, ButtonStyleVariant } from '@channel.io/bezier-react'
import UserCard from '../components/user/UserCard'
import {
  DEFAULT_USER,
  OFFLINE_USER,
  OFFLINE_USER2,
  OFFLINE_USER3,
  OnlineCrescent_USER,
  OfflineCrescent_USER,
} from '../constants/user'
import EmojiPicker from 'emoji-picker-react'

interface WorkspaceProps {}

const Workspace: React.FC<WorkspaceProps> = () => {
  const [isGroupSectionOpen, setIsGroupSectionOpen] = useState<boolean>(true)
  const [isDirectMessageSectionOpen, setIsDirectMessageSectionOpen] = useState<boolean>(true)
  return (
    <div className={workspaceLayoutStyles.container}>
      <div className={workspaceLayoutStyles.left_nav_bar}>
        <LeftStack />
      </div>
      <div className={workspaceLayoutStyles.base_container}>
        <div className={workspaceLayoutStyles.workspace_info_container}>
          <WorkspaceInfo />
        </div>
        <div className={workspaceLayoutStyles.chat_desk_container}>
          <div className={workspaceLayoutStyles.header_bar}>
            <h1>&nbsp;&nbsp;Chat Room</h1>
          </div>
          <div className={workspaceLayoutStyles.desk_main}>
            <div className={workspaceLayoutStyles.chat_view_container}>
              <div className={workspaceLayoutStyles.chat_contents}>
                <ChatView />
              </div>
              <div className={workspaceLayoutStyles.message_editor}>
                <MessageEditor />
              </div>
            </div>
            <div className={workspaceLayoutStyles.chat_info_view_container}>
              <div
                style={{
                  backgroundColor: 'rgb(49, 50, 52)',
                  width: '294px',
                  borderRadius: '10px',
                  marginTop: '6px',
                  padding: '6px',
                }}
              >
                <SectionLabel
                  wrapperInterpolation={{ width: '100%', borderRadius: '10px' }}
                  leftContent={{ icon: PersonFilledIcon }}
                  content={`참여자 • ${6}`}
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
                  ]}
                >
                  <UserCard user={DEFAULT_USER} />
                  <UserCard user={OnlineCrescent_USER} />
                  <UserCard user={OfflineCrescent_USER} />
                  <UserCard user={OFFLINE_USER} />
                  <UserCard user={OFFLINE_USER2} />
                  <UserCard user={OFFLINE_USER3} />
                </SectionLabel>
              </div>
              <UserMiniProfile user={DEFAULT_USER} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workspace
