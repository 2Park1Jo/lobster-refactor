import React from 'react'
import { useRecoilValue } from 'recoil'
import { CHAT_ATOM } from '../../../models/model/atoms'
import MessageView from './MessageView'
import messageStyles from '../../../styles/chat/message.module.scss'

const ChatView: React.FC = () => {
  const messages = useRecoilValue(CHAT_ATOM)

  return (
    <div className={messageStyles.chat_view_container}>
      {messages.map((message, index) => (
        <MessageView key={index} message={message} beforeSenderId={index > 0 ? messages[index - 1].sender.id : ''} />
      ))}
    </div>
  )
}

export default ChatView
