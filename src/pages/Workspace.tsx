import React from 'react'
import workspaceLayoutStyles from '../styles/workspace/workspaceLayout.module.scss'
import LeftStack from '../components/workspace/LeftNavBar'
import WorkspaceInfo from '../components/workspace/WorkspaceInfo'
import UserMiniProfile from '../components/user/UserMiniProfile'
import MessageEditor from '../components/chat/editor/MessageEditor'
import ChatView from '../components/chat/message/ChatView'
import ParticipantsCard from '../components/workspace/ParticipantsCard'
import { DEFAULT_USER } from '../constants/user'

interface WorkspaceProps {}

const Workspace: React.FC<WorkspaceProps> = () => {
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
              <ParticipantsCard />
              <UserMiniProfile user={DEFAULT_USER} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workspace
