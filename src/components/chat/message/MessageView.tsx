import React, { useState } from 'react'
import { Message } from '../../../interfaces/chat/Message'
import { ListItem } from '@channel.io/bezier-react'
import MessageContent from './MessageContent'
import MessageExtraMenu from './MessageExtraMenu'

interface MessageViewProps {
  message: Message
  beforeMessage: Message | null
}

const MessageView: React.FC<MessageViewProps> = (props) => {
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <ListItem
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      content={<MessageContent message={props.message} beforeMessage={props.beforeMessage} />}
      rightContent={isHover && <MessageExtraMenu />}
    />
  )
}

export default MessageView
