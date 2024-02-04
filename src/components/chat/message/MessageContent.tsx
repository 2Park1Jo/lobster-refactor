import React from 'react'
import { Message } from '../../../interfaces/chat/Message'
import { VStack, Text, Avatar, AvatarSize } from '@channel.io/bezier-react'
import messageStyles from '../../../styles/chat/message.module.scss'
interface MessageViewProps {
  message: Message
  beforeMessage: Message | null
}

const MessageContent: React.FC<MessageViewProps> = (props) => {
  const checkBeforeChatSameSender = (): boolean => {
    if (
      props.beforeMessage &&
      props.beforeMessage.sender.id === props.message.sender.id &&
      props.beforeMessage.timeStamp === props.message.timeStamp
    )
      return true

    return false
  }

  return checkBeforeChatSameSender() ? (
    <Text className={messageStyles.none_avatar_message_container}>{props.message.content}</Text>
  ) : (
    <div className={messageStyles.avatar_message_container}>
      <Avatar style={{ paddingRight: '10px' }} name="" size={AvatarSize.Size42} />
      <VStack>
        <Text bold>
          {props.message.sender.name}
          <Text className={messageStyles.message_timestamp}>{String(props.message.timeStamp)}</Text>
        </Text>
        <Text className={messageStyles.message_content}>{props.message.content}</Text>
      </VStack>
    </div>
  )
}
export default MessageContent
