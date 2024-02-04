import React, { useState } from 'react'
import MessageEditorMenu from './MessageEditorMenu'
import { TextArea } from '@channel.io/bezier-react'
import messageStyles from '../../../styles/chat/message.module.scss'

const MessageEditor: React.FC = () => {
  const [content, setContent] = useState<string>('')

  return (
    <div className={messageStyles.message_editor_container}>
      <TextArea
        interpolation={{
          flexDirection: 'column',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          height: '70px',
          cursor: 'text',
        }}
        onChange={(e) => setContent(e.target.value)}
        placeholder="메세지를 입력해주세요."
        value={content}
      />
      <MessageEditorMenu content={content} setContent={setContent} />
    </div>
  )
}

export default MessageEditor
